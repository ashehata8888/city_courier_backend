import express, { Application, Response, Request } from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'



dotenv.config()
// test

const PORT = process.env.PORT || 3001

const app: Application = express()
const allowedOrigins = ['http://localhost:3000/'];

const options: cors.CorsOptions = {
  origin: "*"
};
app.use(cors(options));

app.use(express.json())





app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World YAaaaaaaaaa' })
})




app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app 
