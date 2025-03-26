import authenticateUser from './authenticateUser.js'
import getUserName from './getUserName.js'
import registerUser from './registerUser.js'

import createEvent from './createEvent.js'
import getEvent from './getEvent.js'
import getEventsFromDay from './getEventsFromDay.js'
import getDaysOfMonthsWithEvents from './getDaysOfMonthsWithEvents.js'
import getChildren from './getChildren.js'
import deleteEvent from './deleteEvent.js'



const logic = {
    authenticateUser,
    getUserName,
    registerUser,
    getEventsFromDay,
    getDaysOfMonthsWithEvents,
    createEvent,
    getEvent,
    getChildren,
    deleteEvent

}

export default logic