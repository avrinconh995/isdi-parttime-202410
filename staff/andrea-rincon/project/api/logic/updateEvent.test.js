import mongoose from 'mongoose'
import updateEvent from './updateEvent.js'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            updateEvent(
                '67e2e8645b85bda088a98786', //userId        
                '67ec257b3797175ed4b98694',//eventId                                    
                'Prueba', // title
                ['Alana'],//children
                new Date(2025, 3, 1, 17, 0),//fecha
                'prueba 3prueba test'//nota 

            )
                .then(result => console.log('update created', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))