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
    password: POSTGRES_PASSWORD as string,
    port: parseInt(POSTGRES_PORT as string),
    max: parseInt(POSTGRES_MAX as string)
  })



db.on('error', (error: Error) => {
  console.error(error.message)
})



// app.get('/test-database', async (req: Request, res: Response) => {
//   try {
//     // Establish a connection to the database
//     const client = await db.connect();

//     // Execute a simple query to test the connection
//     const result = await client.query('SELECT 1');

//     // Release the database connection
//     client.release();

//     // Send a success response if the query executed successfully
//     if (result.rows[0].result === 1) {
//       return res.status(200).json({ message: 'Connected to the database.' });
//     } else {
//       return res.status(500).json({ message: 'Failed to connect to the database.' });
//     }
//   } catch (err : any) {
//     // Handle any errors that occurred during the connection or query execution
//     return res.status(500).json({ message: `can't get this route ${err.message}` });
//   }
// });




export default db
