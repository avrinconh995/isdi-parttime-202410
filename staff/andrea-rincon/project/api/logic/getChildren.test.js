import mongoose from 'mongoose'
import getChildren from './getChildren.js'


mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            getChildren('67dd87387e35562857a0c9c5')
                .then(result => console.log('children found', result))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))