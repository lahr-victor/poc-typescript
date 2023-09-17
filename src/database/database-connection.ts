import dotenv from 'dotenv';
import pg, { ConnectionConfig } from 'pg';

dotenv.config();
const {
  POSTGRES_LOCALHOST,
  POSTGRES_PORT,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  NODE_ENV,
} = process.env;

const { Pool } = pg;
const databaseConfig: ConnectionConfig = {
  host: POSTGRES_LOCALHOST,
  port: Number(POSTGRES_PORT),
  user: POSTGRES_USERNAME,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  ssl: NODE_ENV === 'production',
};

const db = new Pool(databaseConfig);
export default db;
