import logic from '../../../logic/index.js'
import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        const { sub: userId } = payload

        const { eventId } = req.params


        logic.getEvent(userId, eventId)
            .then(event => res.json(event))
            .catch(error => next(error))

    } catch (error) {
        next(error)

    }
}