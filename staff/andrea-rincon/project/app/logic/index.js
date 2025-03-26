import registerUser from './registerUser'
import loginUser from './loginUser'
import getUserName from './getUserName'
import getDaysOfMonthsWithEvents from './getDaysofMonthsWithEvents'
import isUserLoggedIn from './isUserLoggedIn'
import logoutUser from './logoutUser'
import getEventsFromDay from './getEventsFromDay'


const logic = {
    registerUser,
    loginUser,
    getUserName,
    isUserLoggedIn,
    logoutUser,

    getDaysOfMonthsWithEvents,
    getEventsFromDay

}

export default logic