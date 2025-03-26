import { Router } from 'express'
import { getChildrenHandler } from './handlers/index.js'


const router = new Router()

router.get('/:userId', getChildrenHandler)



export default router
