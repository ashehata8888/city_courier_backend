 /* eslint-disable prettier/prettier */

import express, { Application, Response, Request } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import routes from "./routes";

dotenv.config();


const PORT = process.env.PORT || 7000;

const app: Application = express();
const allowedOrigins = ["http://localhost:3000/","https://ahmed-shehata-city-courier-shipping-app.onrender.com/"];

const options: cors.CorsOptions = {
  origin: "*",
};
app.use(cors(options));

app.use(express.json());

app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World YAaaaaaaaaa" });
});

app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`);
});

export default app;

// import express, { Application, Response, Request, NextFunction } from "express";
// import cors from "cors";
// import * as dotenv from "dotenv";
// import http from "http";
// import { Server } from "socket.io";
// import routes from "./routes";

// dotenv.config();

// const PORT = process.env.PORT || 7000;

// const app: Application = express();
// const allowedOrigins = ["http://localhost:3000"];

// const options: cors.CorsOptions = {
//   origin: allowedOrigins,
// };

// app.use(cors(options));

// app.use(express.json());

// const server = http.createServer(app);
// const io = new Server(server);

// // Custom interface for Response object
// interface CustomResponse extends Response {
//   io: Server;
// }

// // Custom middleware to attach the io object to the response object
// app.use((req: Request, res: CustomResponse, next: NextFunction) => {
//   res.io = io; // Attach the socket.io instance to the response object
//   next();
// });

// // Register routes middleware after the custom middleware
// app.use("/api", routes);

// app.get("/", (req: Request, res: Response) => {
//   res.json({ message: "Hello World YAaaaaaaaaa" });
// });

// server.listen(PORT, () => {
//   console.log(`Server is starting at port: ${PORT}`);
// });

// export default app;
