/* eslint-disable prettier/prettier */
import User from '../types/user.type'
import db from '../database'
import * as dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import users from '../types/user.type'

dotenv.config()
const passwordEnv = process.env.BCRYPT_PASS
const salt = process.env.SALT_ROUNDS

const hashPass = (pass: string) => {
  const saltend = parseInt(salt as string, 10)
  return bcrypt.hashSync(pass + passwordEnv, saltend)
}


class usersModel {
  // create new users
async createusers(b:users): Promise<users> {
    try {
      const conn = await db.connect()
const sql = `INSERT INTO users(user_name,password,address,user_mail,privilege,status) VALUES (
$$1,$2,$3,$4,$5,$6) RETURNING *`

      const result = await conn.query(sql,
        [b.user_name,b.password,b.address,b.user_mail,b.privilege,b.status])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this users Error : ${(err as Error).message}`)
    }
  }
  // get one users by id
  async getOneusers(id: string): Promise<users> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from users WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this users by id Error : ${(err as Error).message}`)
    }
  }

  // get all userss

  async getAlluserss(): Promise<users[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from users`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these userss Error : ${(err as Error).message}`)
    }
  }

  // udate one users by id
  async updateusers(b: users): Promise<users> {
    try {
      const conn = await db.connect()
  const sql = `UPDATE users SET user_name=$1,password=$2,address=$3,user_mail=$4,privilege=$5,status=$6 WHERE id=$7 RETURNING *`
      const result = await conn.query(sql, [b.user_name,b.password,b.address,b.user_mail,b.privilege,b.status,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this users Error : ${(err as Error).message}`)
    }
  }
  // delete one users by id

  async deleteusers(id: string): Promise<users> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM users WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this users Error : ${(err as Error).message}`)
    }
  }





  // Auth user
  async authenticate(user_name: string, password: string): Promise<User | null> {
    try {
      const conn = await db.connect()
      const sql = `SELECT password FROM users WHERE user_name=$1`
      const result = await conn.query(sql, [user_name])
      if (result.rows.length) {
        const { password: hashPass } = result.rows[0]
        const isPasswordValid = bcrypt.compareSync(password + passwordEnv, hashPass)
        if (isPasswordValid) {
          const sql = `SELECT * FROM users WHERE user_name=$1`
          const userinfo = await conn.query(sql, [user_name])
          return userinfo.rows[0]
        }
      }
      conn.release()
      return null
    } catch (err) {
      throw new Error(`Invaled username or password ${(err as Error).message}`)
    }
  }
}


export default usersModel

