import mongoose from 'mongoose'
import getDaysOfMonthsWithEvents from './getDaysOfmonthsWithEvents.js'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            getDaysOfMonthsWithEvents('67dd2ecd648c306640e2d7a3', 2025, 3)
                .then(events => console.log('Events found', events))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))