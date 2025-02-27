import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

const PORT = 8080

const startApi = () => {
    const api = express()

    api.use(cors())

    api.get('/', (req, res) => {
        res.send('HELLO, API')
    })

    api.use('/users', usersRouter)

    api.use(errorHandler)




}



api.listen(PORT, () => (`API running on port ${PORT}`))

