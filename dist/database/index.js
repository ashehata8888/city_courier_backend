"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const db = new pg_1.Pool({
    connectionString: 'postgres://mkpbnnue:r8hR-PVMpADbrg0Mi1wFq0XfGBo--zcZ@surus.db.elephantsql.com/mkpbnnue',
    // ssl: { rejectUnauthorized: false }, // Remove this line if you don't need SSL for development.
});
// Example query
db.query('SELECT * FROM your_table', (err, res) => {
    if (err) {
        console.error('Error executing query', err);
    }
    else {
        console.log('Query result:', res.rows);
    }
});
// dotenv.config()
// const app = express();
// const {
//   POSTGRES_HOST,
//   POSTGRES_PORT,
//   POSTGRES_DB,
//   POSTGRES_USER,
//   POSTGRES_PASSWORD,
//   POSTGRES_MAX
// } = process.env
// let db: Pool
//   db = new Pool({
//     host: POSTGRES_HOST,
//     database: POSTGRES_DB,
//     user: POSTGRES_USER,
//     password: POSTGRES_PASSWORD,
//     port: parseInt(POSTGRES_PORT as string),
//     max: parseInt(POSTGRES_MAX as string)
//   })
// db.on('error', (error: Error) => {
//   console.error(error.message)
// })
exports.default = db;
