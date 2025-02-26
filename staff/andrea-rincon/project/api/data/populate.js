import mongoose from 'mongoose'
import { User, Child, Event } from './models.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => Promise.all([User.deleteMany(), Child.deleteMany(), Event.deleteMany()]))
    .then(() => {
        const andrea = new User({ name: 'Andrea Rincon', email: 'avrinconh995@gmail.com', password: '123123123' })

        const alana = new Child({ parent: andrea._id, name: 'Alana' })

        const agatha = new Child({ parent: andrea._id, name: 'Agatha' })

        const event = new Event({
            author: andrea._id, children: [alana._id], title: 'Clase natacion',
            description: 'llevar gorro y lentes a la clase de natacion'
        })

        return Promise.all([andrea.save(), alana.save(), agatha.save(), event.save()])
    })
    .then(([andrea, alana, agatha, event]) => {
        console.log('user saved', andrea._id)
        console.log('child save', alana._id)
        console.log('child save', agatha._id)
        console.log('event save', event._id)
    })
    .catch(error => console.error(error))