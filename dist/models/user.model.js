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
const database_1 = __importDefault(require("../database"));
const dotenv = __importStar(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
dotenv.config();
const passwordEnv = process.env.BCRYPT_PASS;
const salt = process.env.SALT_ROUNDS;
const hashPass = (pass) => {
    const saltend = parseInt(salt, 10);
    return bcrypt_1.default.hashSync(pass + passwordEnv, saltend);
};
class usersModel {
    static createUser(u) {
        throw new Error("Method not implemented.");
    }
    // create new users
    async createUser(u) {
        try {
            const conn = await database_1.default.connect();
            const sql = `INSERT INTO users(user_name,password,address,user_mail,privilege,status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`;
            // String(hashPass(u.password))
            const result = await conn.query(sql, [u.user_name, hashPass(u.password), u.address, u.user_mail, u.privilege, u.status]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to create this users Error : ${err.message}`);
        }
    }
    // get one users by id
    async getOneUser(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = `SELECT * from users WHERE id=($1)`;
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to get this users by id Error : ${err.message}`);
        }
    }
    // get all userss
    async getAllUsers() {
        try {
            const conn = await database_1.default.connect();
            const sql = `SELECT * from users`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Unable to get these userss Error : ${err.message}`);
        }
    }
    // udate one users by id
    async updateUser(u) {
        try {
            const conn = await database_1.default.connect();
            const sql = `UPDATE users SET user_name=$1,password=$2,address=$3,user_mail=$4,privilege=$5,status=$6 WHERE id=$7 RETURNING *`;
            const result = await conn.query(sql, [u.user_name, hashPass(u.password), u.address, u.user_mail, u.privilege, u.status, u.id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to update this users Error : ${err.message}`);
        }
    }
    // udate password for one user by id
    async updateUserPass(u) {
        try {
            const conn = await database_1.default.connect();
            const sql = `UPDATE users SET 
    password=$1 WHERE id=$2 RETURNING *`;
            const result = await conn.query(sql, [hashPass(u.password), u.id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to update this user Password Error : ${err.message}`);
        }
    }
    // delete one users by id
    async deleteUser(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = `DELETE FROM users WHERE id=($1) RETURNING *`;
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to Delete this users Error : ${err.message}`);
        }
    }
    // Auth user
    async authenticate(user_name, password) {
        try {
            const conn = await database_1.default.connect();
            const sql = `SELECT password FROM users WHERE user_name=$1`;
            const result = await conn.query(sql, [user_name]);
            if (result.rows.length) {
                const { password: hashPass } = result.rows[0];
                const isPasswordValid = bcrypt_1.default.compareSync(password + passwordEnv, hashPass);
                if (isPasswordValid) {
                    const sql = `SELECT * FROM users WHERE user_name=$1`;
                    const userinfo = await conn.query(sql, [user_name]);
                    return userinfo.rows[0];
                }
            }
            conn.release();
            return null;
        }
        catch (err) {
            throw new Error(`Invaled username or password ${err.message}`);
        }
    }
}
exports.default = usersModel;
