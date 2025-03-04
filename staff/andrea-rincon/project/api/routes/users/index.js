import { Router } from 'express'
import { registerUserHandler } from './handlers/index.js'
import jsonBodyParser from '../../middlewares/jsonBodyParser.js'

const router = new Router()

router.post('/', jsonBodyParser, registerUserHandler)

export default router
