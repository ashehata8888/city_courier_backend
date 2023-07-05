import { Pool } from 'pg'
import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv'

dotenv.config()

const app = express();

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_MAX
} = process.env

let db: Pool


  db = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: parseInt(POSTGRES_PORT as string),
    max: parseInt(POSTGRES_MAX as string)
  })



db.on('error', (error: Error) => {
  console.error(error.message)
})



export default db
