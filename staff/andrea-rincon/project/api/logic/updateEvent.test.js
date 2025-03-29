import mongoose from 'mongoose'
import updateEvent from './updateEvent.js'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            updateEvent(
                '67e6e62335b8e4ea128747da',//eventId 
                '67e2e8645b85bda088a98786', //userId                           
                'Cumple Vicente y Pablo prueba', // title
                ['Alana', 'Agatha'],//children
                new Date(2025, 2, 28, 10, 0),//fecha
                'llevar 2 tartas prueba'//nota 

            )
                .then(result => console.log('update created', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))