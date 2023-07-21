"use strict";
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
exports.authenticate = exports.deleteUser = exports.updateUser = exports.updateUserPass = exports.getAllUsers = exports.getOneUser = exports.createUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const tokenE = process?.env?.TOKEN;
const userModel = new user_model_1.default();
const createUser = async (req, res, next) => {
    try {
        const user = await userModel.createUser(req.body);
        res.json({
            Message: ` User "${user.user_name}" was created successfully`,
            data: { ...user }
        });
    }
    catch (err) {
        next(err);
    }
};
exports.createUser = createUser;
const getOneUser = async (req, res, next) => {
    try {
        const user = await userModel.getOneUser(req.params.id);
        res.json({
            Message: ` User "${user.user_name}" was retrieved successfully`,
            data: { ...user }
        });
    }
    catch (err) {
        next(err);
    }
};
exports.getOneUser = getOneUser;
const getAllUsers = async (req, res, next) => {
    try {
        const users = await userModel.getAllUsers();
        res.json({
            Message: ` the Users was retrieved successfully`,
            data: { ...users }
        });
    }
    catch (err) {
        next(err);
    }
};
exports.getAllUsers = getAllUsers;
const updateUserPass = async (req, res, next) => {
    try {
        // const paramId = req.params.id as unknown as User
        const user = await userModel.updateUserPass(req.body);
        res.json({
            Message: ` the User Name "${user.user_name}" was updated successfully`,
            data: { ...user }
        });
    }
    catch (err) {
        next(err);
    }
};
exports.updateUserPass = updateUserPass;
const updateUser = async (req, res, next) => {
    try {
        // const paramId = req.params.id as unknown as User
        const user = await userModel.updateUser(req.body);
        res.json({
            Message: ` the User Name "${user.user_name}" was updated successfully`,
            data: { ...user }
        });
    }
    catch (err) {
        next(err);
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res, next) => {
    try {
        const user = await userModel.deleteUser(req.params.id);
        res.json({
            Message: ` User Name "${user.user_name}" was deleted successfully`,
            data: { ...user }
        });
    }
    catch (err) {
        next(err);
    }
};
exports.deleteUser = deleteUser;
const authenticate = async (req, res, next) => {
    try {
        const { user_name, password } = req.body;
        const user = await userModel.authenticate(user_name, password);
        if (tokenE) {
            const token = jsonwebtoken_1.default.sign({ user }, tokenE);
            if (!user) {
                return res.status(401).json({
                    message: `User Name or Password is not correct`
                });
            }
            return res.json({
                data: { ...user, token },
                message: `user's passed the authentication successfully`
            });
        }
    }
    catch (err) {
        return next(err);
    }
};
exports.authenticate = authenticate;
