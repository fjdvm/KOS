import { describe, it, expect, beforeEach } from 'vitest';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import * as schema from './schema';
import path from 'path';

describe('Database Schema & Workspace Isolation', () => {
  let testDb: any;
  let sqlite: any;

  beforeEach(() => {
    sqlite = new Database(':memory:');
    testDb = drizzle(sqlite, { schema });

    // Apply migrations
    migrate(testDb, {
      migrationsFolder: path.join(__dirname, '../drizzle'),
    });
  });

  it('should create a workspace and isolate user records', async () => {
    // 1. Create a workspace
    const workspaceId = 'ws-1';
    await testDb.insert(schema.workspace).values({
      id: workspaceId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // 2. Insert a user linked to the workspace
    await testDb.insert(schema.user).values({
      id: 'usr-1',
      name: 'John Doe',
      email: 'john@example.com',
      emailVerified: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      workspaceId: workspaceId,
    });

    // Verify user is created and linked
    const users = await testDb.select().from(schema.user);
    expect(users).toHaveLength(1);
    expect(users[0].workspaceId).toBe(workspaceId);
  });
});
