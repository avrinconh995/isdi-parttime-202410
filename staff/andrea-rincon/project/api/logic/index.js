import authenticateUser from './authenticateUser.js'
import getUserName from './getUserName.js'
import registerUser from './registerUser.js'
import getEventsFromDay from './getEvent.js'
import getDaysOfMonthsWithEvents from './getDaysOfMonthsWithEvents.js'
import createEvent from './createEvent.js'

const logic = {
    authenticateUser,
    getUserName,
    registerUser,
    getEventsFromDay,
    getDaysOfMonthsWithEvents,
    createEvent
}

export default logic