import { User, Event } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

const getEventsFromDay = (userId, year, month, day) => {
    validate.id(userId, 'userId')
    validate.number(year, 'year')
    validate.number(month, 'month')
    validate.number(day, 'day')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('Usuario no encontrado')

            const startDate = new Date(year, month - 1, day, 0, 0, 0, 0)
            const endDate = new Date(year, month - 1, day, 23, 59, 59, 999)

            return Event.find({
                author: userId,
                date: {
                    $gte: startDate,
                    $lt: endDate
                }
            }).select('-author -__v').populate('children').sort('date').lean()

                .catch(error => { throw new SystemError(error.message) })
                .then(events => {
                    events.forEach(event => {
                        event.id = event._id.toString()
                        delete event._id

                        event.children = event.children.map(child => child.name)
                    })
                    return events
                })
        })
}

export default getEventsFromDay