import authenticateUser from './authenticateUser.js'
import getUserName from './getUserName.js'
import registerUser from './registerUser.js'

import createEvent from './createEvent.js'
import getEvent from './getEvent.js'
import getEventsFromDay from './getEvent.js'
import getDaysOfMonthsWithEvents from './getDaysOfMonthsWithEvents.js'
import getChildren from './getChildren.js'



const logic = {
    authenticateUser,
    getUserName,
    registerUser,
    getEventsFromDay,
    getDaysOfMonthsWithEvents,
    createEvent,
    getEvent,
    getChildren

}

export default logic