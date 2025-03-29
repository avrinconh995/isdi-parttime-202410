import authenticateUser from './authenticateUser.js'
import getUserName from './getUserName.js'
import registerUser from './registerUser.js'

import createEvent from './createEvent.js'
import getEvent from './getEvent.js'
import getEventsFromDay from './getEventsFromDay.js'
import getDaysOfMonthsWithEvents from './getDaysOfMonthsWithEvents.js'
import getChildren from './getChildren.js'
import deleteEvent from './deleteEvent.js'
import updateEvent from './updateEvent.js'



const logic = {
    authenticateUser,
    getUserName,
    registerUser,

    getEventsFromDay,
    getDaysOfMonthsWithEvents,
    getEvent,

    createEvent,
    deleteEvent,
    updateEvent,

    getChildren

}

export default logic