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
            if (!user) throw new NotFoundError('User not Found')

            return Child.find({ name: { $in: children } })
                .catch(error => { throw new SystemError(error.message) })
                .then(children1 => {
                    if (children1.length === 0) {

                        const children2 = children.map(child => new Child({ name: child, parent: userId })).save()

                        const event = new Event({ author: user._id, children: children2, title, date, description })

                        return event.save()
                            .catch(error => { throw new SystemError(error.message) })

                    }



                })


        })
        .then(event => { })

}

export default createEvent