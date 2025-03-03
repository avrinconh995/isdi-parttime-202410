import mongoose from 'mongoose'
import { User, Post } from './models.js'


mongoose.connect('mongodb://localhost:27017/test')
    // .then(() => {
    //     return User.deleteMany()
    // })
    // .then(() => {
    //     return Post.deleteMany()
    // })


    // .then(() =>  User.deleteMany())
    // .then(() =>  Post.deleteMany())

    .then(() => Promise.all([User.deleteMany(), Post.deleteMany()]))
    .then(() => {
        const bluey = new User({ name: 'Bluey', email: 'bluey@bluey.com', username: 'bluey', password: '123123123' })
        const post = new Post({ author: bluey._id, image: 'https://www.criarconsentidocomun.com/wp-content/uploads/2024/09/Expertos-en-desarrollo-recomiendan-la-serie-Bluey-1.jpg', text: 'hey Bluey' })

        return Promise.all([bluey.save(), post.save()])
    })
    .then(([bluey, post]) => {
        // const pepito = results[0]
        // const post = results[1]

        // const = results

        console.log('user saved', bluey._id)
        console.log('post saved', post._id)
    })
    .catch(error => console.error(error))
