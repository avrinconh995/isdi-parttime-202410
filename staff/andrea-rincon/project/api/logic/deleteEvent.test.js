import mongoose from 'mongoose'
import deleteEvent from './deleteEvent.js'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            deleteEvent('67e1adecc9bea9fe2266070f', '67e1adecc9bea9fe22660712')
                .then(result => console.log('event deleted', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))