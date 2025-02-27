
import { type } from 'os'
import errors from './errors/index.js'

const { ValidationError } = errors
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



const validate = {
    name(name) {
        if (typeof name !== 'string') throw new ValidationError('invalid name type')
        if (name.length < 1) throw new ValidationError('invalid name length')
    },

    email(email) {
        if (typeof email !== 'string') throw new ValidationError('invalid email type')
        if (email.length < 6) throw new ValidationError('invalid email length')
        if (!email.includes('@')) throw new ValidationError('invalid E-mail you need @')
        if (!EMAIL_REGEX.test(email)) throw new ValidationError('invalid E-mail syntaxis')
    },

    password(password) {
        if (typeof password !== 'string') throw new ValidationError('invalid name type')
        if (password.length < 1) throw new ValidationError('invalid name length')
    },
    id(id, explain = 'id') {
        if (typeof id !== 'string') throw new ValidationError(`invalid${explain} type`)
        if (id.length < 10) throw new ValidationError(`invalid ${explain} length`)

    }

}

export default validate