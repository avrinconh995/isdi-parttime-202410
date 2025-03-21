import mongoose from 'mongoose'
import createEvent from './createEvent.js'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            createEvent(
                '67dd2ecd648c306640e2d7a3', //userId
                ['Alana', 'Agatha'],//children
                'Cita Dra Ana', // title
                new Date(2025, 2, 22, 17, 0),//fecha
                'Preguntar por el huevo'//nota            
            )
                .then(result => console.log('Event created', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))