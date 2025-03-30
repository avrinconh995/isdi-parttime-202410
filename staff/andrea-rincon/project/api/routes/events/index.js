import { Router } from 'express'
import { getDaysOfMonthsWithEventsHandler, getEventsFromDayHandler, getEventHandler, createEventHandler, deleteEventHandler, updateEventHandler } from './handlers/index.js'
import jsonBodyParser from '../../middlewares/jsonBodyParser.js'


const router = new Router()

router.get('/:year/:month', getDaysOfMonthsWithEventsHandler)
router.get('/:year/:month/:day', getEventsFromDayHandler)
router.get('/:eventId', getEventHandler)

router.post('/', jsonBodyParser, createEventHandler)
router.delete('/:eventId', deleteEventHandler)

router.patch('/:eventId', jsonBodyParser, updateEventHandler)

export default router
