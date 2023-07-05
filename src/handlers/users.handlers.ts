import { NextFunction, Request, Response } from 'express'
import UserModel from '../models/user.model'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

const tokenE = process?.env?.TOKEN

const userModel = new UserModel()

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userModel.createUser(req.body)
    res.json({
      Message: ` User "${user.user_name}" was created successfully`,
      data: { ...user }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userModel.getOneUser(req.params.id)
    res.json({
      Message: ` User "${user.user_name}" was retrieved successfully`,
      data: { ...user }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userModel.getAllUsers()
    res.json({
      Message: ` the Users was retrieved successfully`,
      data: { ...users }
    })
  } catch (err) {
    next(err)
  }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const paramId = req.params.id as unknown as User
    const user = await userModel.updateUser(req.body)
    res.json({
      Message: ` the User Name "${user.user_name}" was updated successfully`,
      data: { ...user }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userModel.deleteUser(req.params.id as unknown as string)
    res.json({
      Message: ` User Name "${user.user_name}" was deleted successfully`,
      data: { ...user }
    })
  } catch (err) {
    next(err)
  }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user_name, password } = req.body
    const user = await userModel.authenticate(user_name, password)

    if(tokenE){
      const token = jwt.sign({ user }, tokenE)
      if (!user) {
        return res.status(401).json({
          message: `User Name or Password is not correct`
        })
      }
      return res.json({
        data: { ...user, token },
        message: `user's passed the authentication successfully`
      })
    }
  } catch (err) {
    return next(err)
  }
}
