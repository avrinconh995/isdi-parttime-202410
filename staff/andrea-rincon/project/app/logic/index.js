import registerUser from './registerUser'
import loginUser from './loginUser'
import getUserName from './getUserName'
import isUserLoggedIn from './isUserLoggedIn'
import logoutUser from './logoutUser'


import getDaysOfMonthsWithEvents from './getDaysofMonthsWithEvents'
import getEventsFromDay from './getEventsFromDay'
import createEvent from './createEvent'
import deleteEvent from './deleteEvent'
import getEvent from './getEvent'


const logic = {
    registerUser,
    loginUser,

    getUserName,
    isUserLoggedIn,
    logoutUser,

    getDaysOfMonthsWithEvents,
    getEventsFromDay,
    getEvent,
    createEvent,
    deleteEvent

}

export default logic