import mongoose from 'mongoose'
import getUserName from './getUserName.js'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            getUserName('67c0c664b9e85c66c379b604')
                .then(name => console.log('User name found', name))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))