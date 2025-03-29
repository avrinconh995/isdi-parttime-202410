import { Event, Child } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

const updateEvent = (eventId, userId, children, title, date, description) => {
    // Validaciones de entrada
    validate.id(eventId, 'eventId')
    validate.id(userId, 'userId')
    validate.children(children)  // Verifica que children sea un arreglo de ObjectIds
    validate.title(title)
    validate.date(date)
    validate.description(description)

    return Event.findById(eventId)
        .catch(error => { throw new SystemError(error.message) })

        .then(event => {
            if (!event) throw new NotFoundError('Event not found')

            // Actualizamos los campos del evento
            event.title = title
            event.date = date
            event.description = description

            // Comprobamos que cada child de 'children' sea un ObjectId válido
            // y no esté ya en 'event.children' antes de agregarlo
            return Child.find({ '_id': { $in: children } })  // Aseguramos que los children existan en la DB
                .then(childrenFound => {
                    if (childrenFound.length !== children.length) {
                        throw new SystemError('Some children IDs are invalid or do not exist')
                    }

                    // Agregar los children a la lista si no están ya incluidos
                    children.forEach(child => {
                        if (!event.children.includes(child)) {
                            event.children.push(child)
                        }
                    })

                    // Guardar el evento actualizado
                    return event.save()
                        .catch(error => { throw new SystemError(error.message) })
                })
        })
        .then(event => {
            return event  // Retorna el evento actualizado
        })
}

export default updateEvent