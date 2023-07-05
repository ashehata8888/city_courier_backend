import request from "supertest";
import app from "../index"

describe("GET /", () => {
    it("responds with a JSON message", async () => {
      const response = await request(app).get("/");
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: "Hello World YAaaaaaaaaa" });
    });
  });
  