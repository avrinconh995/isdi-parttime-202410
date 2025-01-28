import mongoose from 'mongoose'
import getPosts from './getPosts.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            getPosts('6797b9974892c9bce73a6f7f')
                .then(posts => console.log('posts gotten', posts))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))


