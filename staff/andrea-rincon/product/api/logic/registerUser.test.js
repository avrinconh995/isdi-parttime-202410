import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {

        try {
            registerUser('Zana Horia', 'zana@horia.com', 'zanahoria', '123123123')
                .then(result => console.log('user registered', result))
                .catch(error => console.error(error))


        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))