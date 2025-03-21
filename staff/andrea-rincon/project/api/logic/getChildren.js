import { User, Child } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

const getChildren = (userId) => {
    validate.id(userId, 'userId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('User not Found')

            return Child.find({
                parent: userId
            }).select('-parent -__v').lean()
                .catch(error => { throw new SystemError(error.message) })

        })
        .then(children => {
            children.forEach(child => {
                child.id = child._id.toString()
                delete child._id
            })
            return children
        })
}

export default getChildren