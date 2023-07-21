"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
describe("GET /", () => {
    it("responds with a JSON message", async () => {
        const response = await (0, supertest_1.default)(index_1.default).get("/");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "Hello World YAaaaaaaaaa" });
    });
});
