import { describe, it, expect, beforeEach } from 'vitest';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from '@better-auth/drizzle-adapter';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import * as schema from 'database';
import path from 'path';
import crypto from 'crypto';

describe('Better Auth Hooks & Workspace Creation', () => {
  let testDb: any;
  let sqlite: any;
  let testAuth: any;

  beforeEach(() => {
    process.env.BETTER_AUTH_SECRET = 'test-secret-key-1234567890-test-secret';
    process.env.BETTER_AUTH_URL = 'http://localhost:3000';

    sqlite = new Database(':memory:');
    testDb = drizzle(sqlite, { schema });

    // Apply migrations
    migrate(testDb, {
      migrationsFolder: path.join(__dirname, '../../database/drizzle'),
    });

    testAuth = betterAuth({
      database: drizzleAdapter(testDb, {
        provider: 'sqlite',
      }),
      emailAndPassword: {
        enabled: true,
      },
      user: {
        additionalFields: {
          workspaceId: {
            type: 'string',
            required: false,
          },
        },
      },
      databaseHooks: {
        user: {
          create: {
            before: async (user) => {
              const workspaceId = crypto.randomUUID();
              await testDb.insert(schema.workspace).values({
                id: workspaceId,
                createdAt: new Date(),
                updatedAt: new Date(),
              });
              return {
                data: {
                  ...user,
                  workspaceId,
                },
              };
            },
          },
        },
      },
    });
  });

  it('should automatically create a workspace when a user signs up', async () => {
    const result = await testAuth.api.signUpEmail({
      body: {
        email: 'john@example.com',
        password: 'password123',
        name: 'John Doe',
      },
    });

    expect(result).toBeDefined();
    expect(result.user).toBeDefined();
    expect(result.user.workspaceId).toBeDefined();

    // Verify workspace exists in the DB
    const workspaces = await testDb.select().from(schema.workspace);
    expect(workspaces).toHaveLength(1);
    expect(workspaces[0].id).toBe(result.user.workspaceId);

    // Verify user is linked to it
    const users = await testDb.select().from(schema.user);
    expect(users).toHaveLength(1);
    expect(users[0].workspaceId).toBe(result.user.workspaceId);
  });
});
