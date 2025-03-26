import logic from '../../../logic/index.js'
import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        const { sub: userId } = payload

        logic.getChildren(userId)
            .then(children => res.json(children))
            .catch(error => next(error))

    } catch (error) {
        next(error)

    }
}