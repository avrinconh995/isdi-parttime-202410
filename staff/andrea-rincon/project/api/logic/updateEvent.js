import { User, Event, Child } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

const updateEvent = (userId, eventId, title, children, date, description) => {
    // // Validaciones de entrada
    validate.id(userId, 'userId')
    validate.id(eventId, 'eventId')
    validate.title(title)
    validate.children(children) // Verifica que sea un array de ObjectIds
    validate.date(date)
    validate.description(description)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('User not found')


            return Event.findById(eventId)
                .catch(error => { throw new SystemError(error.message) })
                .then(event => {
                    if (!event) throw new NotFoundError('Event not found')

                    // Verificar si el usuario es el autor del evento
                    if (event.author.toString() !== userId) {
                        throw new SystemError('User is not the author of the event')
                    }


                    // convertir los nombres en ObjectId
                    return Child.find({ 'name': { $in: children } })
                        .then(validChildren => {
                            if (validChildren.length !== children.length) {
                                throw new SystemError('Some children name are invalid or do not exist')
                            }

                            event.children = [...new Set(validChildren.map(child => child._id.toString()))]

                            event.title = title
                            event.date = new Date(date)
                            event.description = description

                            return event.save()
                                .catch(error => { throw new SystemError(error.message) })
                        })
                })
                .then(updatedEvent => updatedEvent)

        })
}


export default updateEvent