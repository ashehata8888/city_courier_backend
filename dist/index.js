"use strict";
/* eslint-disable prettier/prettier */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
dotenv.config();
const PORT = process.env.PORT || 7000;
const app = (0, express_1.default)();
const allowedOrigins = ["http://localhost:3000/"];
const options = {
    origin: "*",
};
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.json({ message: "Hello World YAaaaaaaaaa" });
});
app.listen(PORT, () => {
    console.log(`Server is starting at prot:${PORT}`);
});
exports.default = app;
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
