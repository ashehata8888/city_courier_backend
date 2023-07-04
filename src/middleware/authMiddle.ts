import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'

dotenv.config()
const tokenE = process?.env?.TOKEN


// validate the user token
const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const getAuthHeader = req.get('Authorization')
    if (getAuthHeader) {
      const bearer = getAuthHeader.split(' ')[0].toLowerCase()
      const token = getAuthHeader.split(' ')[1]
   
      if (tokenE && token && bearer === 'bearer') {

    
        const decoding = jwt.verify(token, tokenE)
        if (decoding) {
          next()
        } else {
          throw new Error('access denied')
        }
      } else {
        throw new Error('access denied')
      }
    } else {
      throw new Error('access denied')
    }
  } catch (err) {
    throw new Error('access denied')
  }
}

export default validateToken
