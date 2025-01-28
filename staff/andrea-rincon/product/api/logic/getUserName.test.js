import mongoose from 'mongoose'
import getUserName from './getUserName.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            getUserName('6797b9974892c9bce73a6f7f')
                .then(name => console.log('user name gotten', name))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    })