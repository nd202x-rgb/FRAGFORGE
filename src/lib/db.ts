import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import path from "node:path";

// node:sqlite is built into Node 22.5+/24 — no native dependency needed.
const DB_PATH = process.env.FRAGFORGE_DB_PATH ?? path.join(process.cwd(), "data", "fragforge.db");

declare global {
  var __fragforgeDb: DatabaseSync | undefined;
}

export function getDb(): DatabaseSync {
  if (!globalThis.__fragforgeDb) {
    mkdirSync(path.dirname(DB_PATH), { recursive: true });
    const db = new DatabaseSync(DB_PATH);
    db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE COLLATE NOCASE,
        username TEXT NOT NULL UNIQUE COLLATE NOCASE,
        password_hash TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      );
      CREATE TABLE IF NOT EXISTS sessions (
        token TEXT PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        created_at TEXT NOT NULL DEFAULT (datetime('now')),
        expires_at TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS linked_accounts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        platform TEXT NOT NULL,
        tag TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now')),
        UNIQUE (user_id, platform)
      );
      CREATE TABLE IF NOT EXISTS chat_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        room TEXT NOT NULL,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        username TEXT NOT NULL,
        body TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      );
      CREATE INDEX IF NOT EXISTS idx_chat_room ON chat_messages (room, id);
      CREATE TABLE IF NOT EXISTS dm_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sender_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        recipient_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        body TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      );
      CREATE INDEX IF NOT EXISTS idx_dm_pair ON dm_messages (sender_id, recipient_id, id);
      CREATE INDEX IF NOT EXISTS idx_dm_recipient ON dm_messages (recipient_id, id);
      CREATE TABLE IF NOT EXISTS dm_reads (
        reader_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        peer_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        last_read_id INTEGER NOT NULL DEFAULT 0,
        PRIMARY KEY (reader_id, peer_id)
      );
    `);
    try {
      db.exec("ALTER TABLE users ADD COLUMN pro INTEGER NOT NULL DEFAULT 0");
    } catch {
      /* column already exists */
    }
    try {
      db.exec("ALTER TABLE users ADD COLUMN avatar TEXT");
    } catch {
      /* column already exists */
    }
    try {
      db.exec("ALTER TABLE users ADD COLUMN bio TEXT NOT NULL DEFAULT ''");
    } catch {
      /* column already exists */
    }
    try {
      db.exec("ALTER TABLE users ADD COLUMN role TEXT NOT NULL DEFAULT 'member'");
    } catch {
      /* column already exists */
    }
    // Site owner account — always OWNER role + PRO access.
    db.exec("UPDATE users SET role = 'owner', pro = 1 WHERE email = 'nd202x@gmail.com'");
    globalThis.__fragforgeDb = db;
  }
  return globalThis.__fragforgeDb;
}
