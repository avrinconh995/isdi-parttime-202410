import logic from '../../../logic/index.js'
import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        const { sub: userId } = payload

        const { year, month, day } = req.params

        logic.getEventsFromDay(userId, Number(year), Number(month), Number(day))
            .then(day => res.json(day))
            .catch(error => next(error))

    } catch (error) {
        next(error)

    }
}