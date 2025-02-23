import 'dotenv/config'
import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect(process.env.MONGO_URL)
    .then(() => {

        try {
            registerUser('Bluey', 'bluey@bluey.com', 'bluey', '123123123')
                .then(result => console.log('user registered', result))
                .catch(error => console.error(error))


        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))