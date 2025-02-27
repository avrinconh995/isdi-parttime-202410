import mongoose from 'mongoose'
import getUserName from './getUserName.js'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            getUserName('67c0bb3aa8d67dae824c048e')
                .then(name => console.log('User name found', name))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))