import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const workspace = sqliteTable('workspace', {
  id: text('id').primaryKey(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

export const entity = sqliteTable('entity', {
  id: text('id').primaryKey(),
  type: text('type').notNull(), // 'note', 'course', 'lesson', 'project', 'task', 'resource', 'file'
  workspaceId: text('workspace_id')
    .notNull()
    .references(() => workspace.id, { onDelete: 'cascade' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});
