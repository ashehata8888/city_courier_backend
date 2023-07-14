import { Router } from 'express'
import * as act from '../../handlers/tracking.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/',authMiddleware, act.createTracking)
routes.get('/',authMiddleware, act.getAllTrackings)
routes.get('/:id', authMiddleware, act.getOneTracking)
routes.patch('/:id', authMiddleware,act.updateTracking)
routes.delete('/:id', authMiddleware, act.deleteTracking)

export default routes


