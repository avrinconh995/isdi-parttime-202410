import errors from './errors/index.js'

const { ValidationError } = errors
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^((?!.*[\s])(?=.*[a-zA-Z0-9])(?=.*\d).{8,15})/




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
        if (!PASSWORD_REGEX.test(password)) throw new ValidationError('invalid password syntax')
    },

    id(id, explain = 'id') {
        if (typeof id !== 'string') throw new ValidationError(`invalid${explain} type`)
        if (id.length < 10) throw new ValidationError(`invalid ${explain} length`)

    },

    number(number, explain = 'number') {
        if (typeof number !== 'number') throw new ValidationError(`invalid${explain} type`)
    },

    children(children) {
        if (!(children instanceof Array)) throw new ValidationError('invalid child type')
        children.forEach(child => {
            if (typeof child !== 'string') throw new ValidationError('invalid child type')
        })
    },

    date(date) {
        if (!(date instanceof Date)) throw new ValidationError('invalid date type')
    },

    title(title) {
        if (typeof title !== 'string') throw new ValidationError('invalid title type')
        if (title.length < 1 || title.length > 80) throw new ValidationError('invalid title length')
    },

    description(description) {
        if (typeof description !== 'string') throw new ValidationError('invalid description type')
        if (description.length < 1 || description.length > 80) throw new ValidationError('invalid description length')
    }

}

export default validate