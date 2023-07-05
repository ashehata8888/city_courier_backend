
import express, { Application, Response, Request } from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import routes from './routes'



dotenv.config()
// test



/* eslint-disable prettier/prettier */


import bcrypt from 'bcrypt'


dotenv.config()
const passwordEnv = process.env.BCRYPT_PASS
const salt = process.env.SALT_ROUNDS

const hashPass = (pass: string) => {
  const saltend = parseInt(salt as string, 10)
  return bcrypt.hashSync(pass + passwordEnv, saltend)
}


console.log("test hashPass",hashPass("password"))







const PORT = process.env.PORT || 3001

const app: Application = express()
const allowedOrigins = ['http://localhost:3000/'];

const options: cors.CorsOptions = {
  origin: "*"
};
app.use(cors(options));


app.use(express.json())


app.use('/api', routes)


app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World YAaaaaaaaaa' })
})




app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT} hasspass ${hashPass("password")}`)
})

export default app 
