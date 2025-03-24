import logic from '../../../logic/index.js'
import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        const { sub: userId } = payload

        const { year, month } = req.params

        logic.getDaysOfMonthsWithEvents(userId, Number(year), Number(month))
            .then(days => res.json(days))
            .catch(error => next(error))

    } catch (error) {
        next(error)

    }
}