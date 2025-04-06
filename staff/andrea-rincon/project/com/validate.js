import errors from './errors/index.js'

const { ValidationError } = errors
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^((?!.*[\s])(?=.*[a-zA-Z0-9])(?=.*\d).{8,15})/




const validate = {
    name(name) {
        if (typeof name !== 'string') throw new ValidationError('El nombre no es valido')
        if (name.length < 1) throw new ValidationError('El nombre no puede estar vacío')
    },

    email(email) {
        if (typeof email !== 'string') throw new ValidationError('El E-mail no es valido ')
        if (email.length < 6) throw new ValidationError('Debes ingresar un E-mail valido')
        if (!email.includes('@')) throw new ValidationError('El E-mail debe incluir @')
        if (!EMAIL_REGEX.test(email)) throw new ValidationError('El formato del E-mail no es valida')
    },

    password(password) {
        if (typeof password !== 'string') throw new ValidationError('El nombre no es válido')
        if (!PASSWORD_REGEX.test(password)) throw new ValidationError('La contraseña no es válida')
    },

    id(id, explain = 'id') {
        if (typeof id !== 'string') throw new ValidationError(`El ${explain} no es valido`)
        if (id.length < 10) throw new ValidationError(`El ${explain} no es válido`)

    },

    number(number, explain = 'number') {
        if (typeof number !== 'number') throw new ValidationError(`El ${explain} no es valido`)
    },

    children(children) {
        if (!(children instanceof Array)) throw new ValidationError('Los datos del hij@ no es válido')
        children.forEach(child => {
            if (typeof child !== 'string') throw new ValidationError('Los dados del hij@ no es válido')
        })
    },

    date(date) {
        if (!(date instanceof Date)) throw new ValidationError('La fecha no es válida')
    },

    title(title) {
        if (typeof title !== 'string') throw new ValidationError('El titulo no es válido')
        if (title.length < 1 || title.length > 80) throw new ValidationError('El título no es válido')
    },

    description(description) {
        if (typeof description !== 'string') throw new ValidationError('La descripción no es válida')
        if (description.length < 1 || description.length > 80) throw new ValidationError('La descripción debe tener entre 1 y 80 caracteres')
    }

}

export default validate