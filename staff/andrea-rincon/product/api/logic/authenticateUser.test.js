import 'dotenv/config'
import mongoose from 'mongoose'
import authenticateUser from './authenticateUser.js'

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        try {
            authenticateUser('bluey', '123123123')
                .then(userId => console.log('user authenticated', userId))
                .catch(error => console.error(error))


        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error)