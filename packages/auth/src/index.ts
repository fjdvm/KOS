import { betterAuth } from 'better-auth';
import { drizzleAdapter } from '@better-auth/drizzle-adapter';
import { db, workspace } from 'database';
import crypto from 'crypto';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
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
          await db.insert(workspace).values({
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

export { toNextJsHandler } from "better-auth/next-js";
