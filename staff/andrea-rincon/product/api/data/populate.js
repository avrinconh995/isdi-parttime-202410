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
        const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })
        const post = new Post({ author: pepito._id, image: 'https://imgs.search.brave.com/hI_be7hWUNAu_Rl8bbGsYFiGq9TaVhQ6mMivvJGflhM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgw/OTE1Mjc0L3Bob3Rv/L2ZyZXNoLW1lbG9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz12ZWRtdWtSZUZE/dkNPekZ3aUNGaGli/TnlGRWhJMHhQR2lB/OExsalhLVkdVPQ', text: 'hey pepito' })

        return Promise.all([pepito.save(), post.save()])
    })
    .then(([pepito, post]) => {
        // const pepito = results[0]
        // const post = results[1]

        // const = results

        console.log('user saved', pepito._id)
        console.log('post saved', post._id)
    })
    .catch(error => console.error(error))
