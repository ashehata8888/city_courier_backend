"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const tokenE = process?.env?.TOKEN;
// validate the user token
const validateToken = (req, res, next) => {
    try {
        const getAuthHeader = req.get('Authorization');
        if (getAuthHeader) {
            const bearer = getAuthHeader.split(' ')[0].toLowerCase();
            const token = getAuthHeader.split(' ')[1];
            if (tokenE && token && bearer === 'bearer') {
                const decoding = jsonwebtoken_1.default.verify(token, tokenE);
                if (decoding) {
                    next();
                }
                else {
                    throw new Error('access denied');
                }
            }
            else {
                throw new Error('access denied');
            }
        }
        else {
            throw new Error('access denied');
        }
    }
    catch (err) {
        throw new Error('access denied');
    }
};
exports.default = validateToken;
