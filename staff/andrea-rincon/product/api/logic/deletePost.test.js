import mongoose from 'mongoose'
import deletePost from './deletePost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            deletePost('6797b9974892c9bce73a6f7f', '6797b9974892c9bce73a6f80')
                .then(result => console.log('post deleted', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
