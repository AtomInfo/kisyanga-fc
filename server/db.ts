import "dotenv/config";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

let pool: Pool;
try {
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
  // Test the connection immediately
  pool.query('SELECT 1').then(() => {
    console.log('Database connection successful.');
  }).catch((err) => {
    console.error('Database connection failed:', err);
  });
} catch (err) {
  console.error('Error creating database pool:', err);
  throw err;
}

export { pool };
export const db = drizzle(pool, { schema });
// export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// export const db = drizzle(pool, { schema });
