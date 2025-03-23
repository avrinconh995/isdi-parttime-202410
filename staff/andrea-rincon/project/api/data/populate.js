import mongoose from 'mongoose'
import { User, Child, Event } from './models.js'

import bcrypt from 'bcryptjs'

mongoose.connect('mongodb://localhost:27017/calendar')
    .then(() => Promise.all([User.deleteMany(), Child.deleteMany(), Event.deleteMany()]))
    .then(() => {
        return bcrypt.hash('123123123', 10)
            .then(hash => {
                const andrea = new User({ name: 'Andrea Rincon', email: 'andrea@rincon.com', password: hash })

                const alana = new Child({ parent: andrea._id, name: 'Alana' })

                const agatha = new Child({ parent: andrea._id, name: 'Agatha' })

                const event = new Event({
                    author: andrea._id, children: [alana._id], title: 'Clase natacion',
                    description: 'llevar gorro y lentes a la clase de natacion'
                })

                const event1 = new Event({
                    author: andrea._id, children: [agatha._id], title: 'cita dra Ana',
                    description: 'consultar próximas vacunas'
                })

                const event2 = new Event({
                    author: andrea._id, children: [alana._id, agatha._id], title: 'Cumple Vicente',
                    description: 'recordar llevar regalo, salir a las 4pm para poder llegar'
                })

                return Promise.all([andrea.save(), alana.save(), agatha.save(), event.save(), event1.save(), event2.save()])

            })

    })
    .then(([andrea, alana, agatha, event, event1, event2]) => {
        console.log('user saved', andrea._id)
        console.log('child save', alana._id)
        console.log('child save', agatha._id)
        console.log('event save', event._id)
        console.log('event save', event1._id)
        console.log('event save', event2._id)
    })
    .catch(error => console.error(error))

