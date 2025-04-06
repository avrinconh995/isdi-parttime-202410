import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors


const getUserName = userId => {
    validate.id(userId, 'userId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('Usuario no encontrado')

            return user.name
        })
}

export default getUserName