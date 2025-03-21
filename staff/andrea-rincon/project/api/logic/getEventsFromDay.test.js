import mongoose from 'mongoose'
import getEventsFromDay from './getEventsFromDay.js'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            getEventsFromDay('67dd87387e35562857a0c9c5', 2025, 3, 21)
                .then(events => console.log('events found', events))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))