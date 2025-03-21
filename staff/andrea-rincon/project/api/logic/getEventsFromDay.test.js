import mongoose from 'mongoose'
import getEventsFromDay from './getEventsFromDay.js'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            getEventsFromDay('67dd2ecd648c306640e2d7a3', 2025, 3, 21)
                .then(events => console.log('events found', events))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))