import { errors } from 'com'

const { ValidationError, SystemError, DuplicityError, CredentialsError, NotFoundError } = errors

export default (error, req, res, next) => {
    if (error instanceof NotFoundError)
        res.status(404).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof CredentialsError)
        res.status(401).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof DuplicityError)
        res.status(409).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof ValidationError)
        res.status(400).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof SystemError)
        res.status(500).json({ error: error.constructor.name, message: error.message })

    else
        res.status(500).json({ error: SystemError.name, message: error.message })
}