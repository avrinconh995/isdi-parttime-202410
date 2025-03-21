import mongoose from 'mongoose'
import getEvent from './getEvent.js'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            getEvent('67dd87387e35562857a0c9c5', '67dd9d72554317652fa6ba59')
                .then(result => console.log('event found', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))