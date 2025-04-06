import { User, Child, Event } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

const createEvent = (userId, children, title, date, description) => {
    validate.id(userId, 'userId')
    validate.children(children)
    validate.title(title)
    validate.date(date)
    validate.description(description)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('Usuario no encontrado')

            return Child.find({ name: { $in: children.map(child => child.toLowerCase()) } })
                .catch(error => { throw new SystemError(error.message) })
                .then(children1 => {
                    if (children1.length === 0) {
                        const childrenInsertions = children.map(child => new Child({ name: child.toLowerCase(), parent: userId }).save())

                        return Promise.all(childrenInsertions)
                            .catch(error => { throw new SystemError(error.message) })
                            .then(children => {
                                const event = new Event({ author: user._id, children: children, title, date, description })

                                return event.save()
                                    .catch(error => { throw new SystemError(error.message) })

                            })
                    } else {
                        const childrenNotInDB = children.filter(child => !children1.find(child1 => child1.name === child.toLowerCase()))

                        if (childrenNotInDB.length) {
                            const childrenInsertions = childrenNotInDB.map(child => new Child({ name: child.toLowerCase(), parent: userId }).save())

                            return Promise.all(childrenInsertions)
                                .catch(error => { throw new SystemError(error.message) })
                                .then(children2 => {
                                    const children3 = children1.concat(children2)

                                    const event = new Event({ author: user._id, children: children3, title, date, description })

                                    return event.save()
                                        .catch(error => { throw new SystemError(error.message) })

                                })

                        } else {
                            const event = new Event({ author: user._id, children: children1, title, date, description })

                            return event.save()
                                .catch(error => { throw new SystemError(error.message) })

                        }
                    }
                })
        })
        .then(event => { })

}
export default createEvent