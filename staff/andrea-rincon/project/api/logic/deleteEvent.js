import { User, Event } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

const deleteEvent = (userId, eventId) => {
    validate.id(userId, 'userId')
    validate.id(eventId, 'eventId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('User not Found')

            return Event.findOneAndDelete({ _id: eventId, author: userId })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(event => {
            if (!event) throw new NotFoundError('Event not Found')
        })
}
export default deleteEvent
