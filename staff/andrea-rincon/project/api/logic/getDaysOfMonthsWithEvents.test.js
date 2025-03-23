import mongoose from 'mongoose'
import getDaysOfMonthsWithEvents from './getDaysOfMonthsWithEvents.js'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => {
        try {
            getDaysOfMonthsWithEvents('67e027d75fff679a33020273', 2025, 3)
                .then(events => console.log('Events found', events))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))