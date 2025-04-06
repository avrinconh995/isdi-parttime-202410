import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { DuplicityError, SystemError } = errors

import bcrypt from 'bcryptjs'

const registerUser = (name, email, password) => {
    validate.name(name)
    validate.email(email)
    validate.password(password)



    return bcrypt.hash(password, 10)
        .catch(error => { throw new SystemError(error.message) })
        .then(hash => {
            return User.create({ name, email, password: hash })
                .catch(error => {
                    if (error.code === 11000)
                        throw new DuplicityError('El usuario ya existe')
                    throw new SystemError(error.message)
                })
        })
        .then(user => { })
}

export default registerUser
