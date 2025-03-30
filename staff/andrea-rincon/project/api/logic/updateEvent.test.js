import mongoose from 'mongoose'
import updateEvent from './updateEvent.js'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            updateEvent(
                '67e6e6b635b8e4ea128747e6',//eventId 
                '67e2e8645b85bda088a98786', //userId                           
                'Cita Dra Ana prueba 2', // title
                ['67e6e62335b8e4ea128747d8'],//children
                new Date(2025, 2, 29, 17, 0),//fecha
                'prueba 2'//nota 

            )
                .then(result => console.log('update created', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))