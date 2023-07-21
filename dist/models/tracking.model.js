"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class trackingModel {
    // create new tracking
    async createTracking(t) {
        try {
            const conn = await database_1.default.connect();
            const sql = `INSERT INTO tracking(sender_name,sender_phone,sender_adress,receiver_name,receiver_phone,receiver_adress,parcel_qt,parcel_content,parcel_wight,parcel_status,action_by,picked_up_time,delivery_time,user_id) VALUES (
$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING *`;
            const result = await conn.query(sql, [t.sender_name, t.sender_phone, t.sender_adress, t.receiver_name, t.receiver_phone, t.receiver_adress, t.parcel_qt, t.parcel_content, t.parcel_wight, t.parcel_status, t.action_by, t.picked_up_time, t.delivery_time, t.user_id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to create this tracking Error : ${err.message}`);
        }
    }
    // get one tracking by id
    async getOneTracking(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = `SELECT * from tracking WHERE id=($1)`;
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to get this tracking by id Error : ${err.message}`);
        }
    }
    // get all trackings
    async getAllTrackings() {
        try {
            const conn = await database_1.default.connect();
            const sql = `SELECT * from tracking`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Unable to get these trackings Error : ${err.message}`);
        }
    }
    // get all trackings for one user
    async getAllTrackingsForOneUser(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = `SELECT * from tracking WHERE tracking.user_id =($1) `;
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Unable to get these trackings Error : ${err.message}`);
        }
    }
    // udate one tracking by id
    async updateTracking(t) {
        try {
            const conn = await database_1.default.connect();
            const sql = `UPDATE tracking SET  sender_name=$1,sender_phone=$2,sender_adress=$3,receiver_name=$4,receiver_phone=$5,receiver_adress=$6,parcel_qt=$7,parcel_content=$8,parcel_wight=$9,parcel_status=$10,action_by=$11,picked_up_time=$12,delivery_time=$13 WHERE id=$14 RETURNING *`;
            const result = await conn.query(sql, [t.sender_name, t.sender_phone, t.sender_adress, t.receiver_name, t.receiver_phone, t.receiver_adress, t.parcel_qt, t.parcel_content, t.parcel_wight, t.parcel_status, t.action_by, t.picked_up_time, t.delivery_time, t.id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to update this tracking Error : ${err.message}`);
        }
    }
    // udate picked date and time for one track by id
    async updatePicked_up_time(t) {
        try {
            const conn = await database_1.default.connect();
            const sql = `UPDATE tracking SET picked_up_time =$1,parcel_status=$2,action_by=$3  WHERE id=$4 RETURNING *`;
            const result = await conn.query(sql, [t.picked_up_time, t.parcel_status, t.action_by, t.id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to update this picked_up_time ,parcel status and action by Error : ${err.message}`);
        }
    }
    // udate Delivery date and time for one track by id
    async updateDelivery_time(t) {
        try {
            const conn = await database_1.default.connect();
            const sql = `UPDATE tracking SET delivery_time=$1,parcel_status=$2,action_by=$3 WHERE id=$4 RETURNING *`;
            const result = await conn.query(sql, [t.delivery_time, t.parcel_status, t.action_by, t.id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to update this delivery_time ,parcel status and action by Error : ${err.message}`);
        }
    }
    // delete one tracking by id
    async deleteTracking(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = `DELETE FROM tracking WHERE id=($1) RETURNING *`;
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to Delete this tracking Error : ${err.message}`);
        }
    }
}
exports.default = trackingModel;
