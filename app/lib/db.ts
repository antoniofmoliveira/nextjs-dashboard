import createConnectionPool, { sql } from '@databases/pg';

export { sql };

const db = createConnectionPool(process.env.DATABASE_URL);
export default db;