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
            if (!user) throw new NotFoundError('Usuario no encontrado')


            return Event.findById(eventId)
                .catch(error => { throw new SystemError(error.message) })
                .then(event => {
                    // console.log('event', event)
                    if (!event) throw new NotFoundError('Evento no encontrado')

                    // Verificar si el usuario es el autor del evento
                    if (event.author.toString() !== userId) {
                        throw new SystemError('El usuario no es el author del evento')
                    }


                    // buscar children por nombre
                    return Child.find({ 'name': { $in: children.map(child => child.toLowerCase()) } })
                        .then(foundChildren => {
                            // console.log(foundChildren)

                            if (foundChildren.length !== children.length) {
                                throw new SystemError('Verifica el nombre,  no es  válido o no existe')
                            }

                            // Actualizar los nombres de los niños en el evento, manteniendo los IDs
                            event.children = foundChildren.map(child => ({
                                _id: child._id,
                                name: child.name
                            }));

                            event.title = title;
                            event.date = new Date(date);
                            event.description = description;

                            return event.save()
                                .catch(error => { throw new SystemError(error.message); });
                        });
                })
                .then(updatedEvent => updatedEvent)
        })
}

export default updateEvent