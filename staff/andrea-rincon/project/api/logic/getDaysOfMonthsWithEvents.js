import { User, Event } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

const getDaysOfMonthsWithEvents = (userId, year, month) => {
    validate.id(userId, 'userId')
    validate.number(year, 'year')
    validate.number(month, 'month')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('User not Found')

            const startDate = new Date(year, month - 1, 1)
            const endDate = new Date(year, month, 1)

            return Event.find({
                author: userId,
                date: {
                    $gte: startDate,
                    $lt: endDate
                }
            })
                .catch(error => { throw new SystemError(error.message) })
                .then(events => {
                    return events.map(event => event.date.getDate())
                })
                .then(days => {
                    const filteredDays = []

                    days.forEach(day => {
                        if (!filteredDays.includes(day)) { filteredDays.push(day) }

                    })
                    return filteredDays
                })




        })
}

export default getDaysOfMonthsWithEvents