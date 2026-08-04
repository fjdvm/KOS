import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

const dbPath = process.env.DATABASE_URL || '/home/friedrich/workspace/labs/KOS/data/knowledge.db';

export const sqlite = new Database(dbPath);

// Enable WAL mode for better performance with concurrency
sqlite.pragma('journal_mode = WAL');

export const db = drizzle(sqlite, { schema });

export * from './schema';
