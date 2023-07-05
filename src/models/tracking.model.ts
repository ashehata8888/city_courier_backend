import tracking from '../types/tracking.type'
import db from '../database'

class trackingModel {
  // create new tracking
async createTracking(t:tracking): Promise<tracking> {
    try {
      const conn = await db.connect()
const sql = `INSERT INTO tracking(sender_name,sender_phone,sender_adress,receiver_name,receiver_phone,receiver_adress,parcel_qt,parcel_content,parcel_wight,parcel_status,action_by,picked_up_time,delivery_time) VALUES (
$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`

      const result = await conn.query(sql,
        [t.sender_name,t.sender_phone,t.sender_adress,t.receiver_name,t.receiver_phone,t.receiver_adress,t.parcel_qt,t.parcel_content,t.parcel_wight,t.parcel_status,t.action_by,t.picked_up_time,t.delivery_time])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this tracking Error : ${(err as Error).message}`)
    }
  }
  // get one tracking by id
  async getOneTracking(id: string): Promise<tracking> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from tracking WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this tracking by id Error : ${(err as Error).message}`)
    }
  }

  // get all trackings

  async getAllTrackings(): Promise<tracking[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from tracking`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these trackings Error : ${(err as Error).message}`)
    }
  }

  // udate one tracking by id
  async updateTracking(t: tracking): Promise<tracking> {
    try {
      const conn = await db.connect()
  const sql = `UPDATE tracking SET  sender_name=$1,sender_phone=$2,sender_adress=$3,receiver_name=$4,receiver_phone=$5,receiver_adress=$6,parcel_qt=$7,parcel_content=$8,parcel_wight=$9,parcel_status=$10,action_by=$11,picked_up_time=$12,delivery_time=$13 WHERE id=$14 RETURNING *`
      const result = await conn.query(sql, [t.sender_name,t.sender_phone,t.sender_adress,t.receiver_name,t.receiver_phone,t.receiver_adress,t.parcel_qt,t.parcel_content,t.parcel_wight,t.parcel_status,t.action_by,t.picked_up_time,t.delivery_time,t.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this tracking Error : ${(err as Error).message}`)
    }
  }
  // delete one tracking by id

  async deleteTracking(id: string): Promise<tracking> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM tracking WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this tracking Error : ${(err as Error).message}`)
    }
  }


}

export default trackingModel
