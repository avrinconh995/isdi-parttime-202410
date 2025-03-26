import logic from '../../../logic/index.js'
import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        const { sub: userId } = payload

        const {
            children,
            title,
            date,
            description } = req.body


        logic.createEvent(userId, children, title, new Date(date), description)
            .then(() => res.status(201).send())
            .catch(error => next(error))

    } catch (error) {
        next(error)

    }
}