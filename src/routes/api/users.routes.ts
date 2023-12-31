import { Router } from 'express'
import * as act from '../../handlers/users.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', act.createUser)
routes.get('/', act.getAllUsers)
routes.patch('/pass/:id',act.updateUserPass)
routes.get('/:id', authMiddleware, act.getOneUser)
routes.patch('/:id', authMiddleware,act.updateUser)

routes.delete('/:id', authMiddleware, act.deleteUser)
routes.post('/authenticate', act.authenticate)

export default routes



