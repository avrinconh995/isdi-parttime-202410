
import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            registerUser('Andrea', 'andrea@rincon.com', '123123123')
                .then(result => console.log('User registered', result)) // result undefined
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))