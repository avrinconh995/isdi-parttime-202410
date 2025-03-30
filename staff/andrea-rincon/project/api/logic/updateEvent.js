import { Event, Child } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

const updateEvent = (eventId, userId, title, children, date, description) => {
    // Validaciones de entrada
    validate.id(eventId, 'eventId')
    validate.id(userId, 'userId')
    validate.title(title)
    validate.children(children) // Verifica que sea un array de ObjectIds
    validate.date(date)
    validate.description(description)



    return Event.findById(eventId)
        .then(event => {
            if (!event) throw new NotFoundError('Event not found')

            // Asignar los nuevos valores al evento
            Object.assign(event, { title, date, description })

            // Verificar que los niños existen en la base de datos
            return Child.find({ '_id': { $in: children } })
                .then(validChildren => {
                    if (validChildren.length !== children.length) {
                        throw new SystemError('Some children IDs are invalid or do not exist')
                    }

                    // Actualizar la lista de niños en el evento, eliminando duplicados
                    event.children = [...new Set(validChildren.map(child => child._id.toString()))]

                    return event.save()
                })
        })
        .then(updatedEvent => updatedEvent)
        .catch(error => { throw new SystemError(error.message) })
}

export default updateEvent