"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const index_1 = __importDefault(require("./index"));
describe('Database Connection', () => {
    it('should connect to the database successfully', () => {
        expect(index_1.default).toBeInstanceOf(pg_1.Pool);
    });
    it('should handle database connection errors', () => {
        const errorSpy = jest.spyOn(console, 'error');
        index_1.default.emit('error', new Error('Database connection error'));
        expect(errorSpy).toHaveBeenCalled();
    });
});
