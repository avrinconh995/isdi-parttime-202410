import { errors } from 'com'

const { DuplicityError, SystemError, NotFoundError } = errors

export default (error, req, res, next) => {
    if (error instanceof NotFoundError)
        res.status(404).json({ error: error.constructor.name, message: error.message })

    else if (error instanceof DuplicityError)
        res.status(409).json({ error: error.constructor.name, message: error.message })
    else (error instanceof SystemError)
    res.status(500).json({ error: error.constructor.name, message: error.message })
}