import { Router } from 'express'
import { getDaysOfMonthsWithEventsHandler, getEventsFromDayHandler } from './handlers/index.js'
import jsonBodyParser from '../../middlewares/jsonBodyParser.js'


const router = new Router()

router.get('/:year/:month', getDaysOfMonthsWithEventsHandler)
router.get('/:year/:month/:day', getEventsFromDayHandler)



export default router
