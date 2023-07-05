import { Router } from 'express'
import usersRoutes from './api/users.routes'
import trackingRoutes from './api/tracking.routes'


const routes = Router()



routes.use('/users', usersRoutes)
routes.use('/tracking',trackingRoutes)






export default routes




