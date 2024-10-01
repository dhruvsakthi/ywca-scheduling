import { Router } from 'express'

import userRouter from '../routes/user.route'

import authRouter from './auth.route'

import vendorRouter from './vendor.route'

const rootRouter = Router()

rootRouter.use('/user', userRouter)
rootRouter.use('/auth', authRouter)
rootRouter.use('/vendor', vendorRouter)
rootRouter.get('/health', (req, res) => res.send('OK'))

export default rootRouter
