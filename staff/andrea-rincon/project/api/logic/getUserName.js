import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors


const getUserName = userId => {
    validate.id(userId, 'userId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('User not Found')

            return user.name
        })
}

export default getUserName