import 'dotenv/config'
import mongoose from 'mongoose'
import createPost from './createPost.js'

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        try {
            createPost('67c448ca832e2e9afdac3ce3', 'https://www.criarconsentidocomun.com/wp-content/uploads/2024/09/Expertos-en-desarrollo-recomiendan-la-serie-Bluey-1.jpg', 'Mi Familia')
                .then(result => console.log('post created', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))



