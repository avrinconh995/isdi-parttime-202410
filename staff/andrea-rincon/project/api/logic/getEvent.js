import { User, Event } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

const getEvent = (userId, eventId) => {
    validate.id(userId, 'userId')
    validate.id(eventId, 'eventId')


    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('User not Found')

            return Event.find(eventId).select('-author').populate('children').lean()

                .catch(error => { throw new SystemError(error.message) })
                .then(events => {
                    events.forEach(event => {
                        event.id = event._id.toString()
                        delete event._id

                        delete event.__v

                    })
                    return events
                })

        })
}

export default getEvent