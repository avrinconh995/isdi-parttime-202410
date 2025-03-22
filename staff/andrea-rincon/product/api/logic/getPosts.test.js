import 'dotenv/config'
import mongoose from 'mongoose'
import getPosts from './getPosts.js'

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        try {
            getPosts('67c44cd23f6d9a88316a6893')
                .then(posts => console.log('posts gotten', posts))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))


