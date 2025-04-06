import { User, Event } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

const getEvent = (userId, eventId) => {
    validate.id(userId, 'userId')
    validate.id(eventId, 'eventId')


    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('Usuario no encontrado')

            return Event.findById(eventId).select('-author -__v').populate('children', '-parent -__v').lean()
                .catch(error => { throw new SystemError(error.message) })

                .then(event => {
                    event.id = event._id.toString()
                    delete event._id

                    event.children.forEach(child => {
                        child.id = child._id.toString()
                        delete child._id
                    })

                    return event
                })

        })
}

export default getEvent