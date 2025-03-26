import mongoose from 'mongoose'
import createEvent from './createEvent.js'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            createEvent(
                '67e2e8645b85bda088a98786', //userId
                ['Alana', 'Agatha'],//children
                'Clases de Natacion', // title
                new Date(2025, 2, 25, 17, 0),//fecha
                'Preguntar por el huevo'//nota            
            )
                .then(result => console.log('Event created', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))