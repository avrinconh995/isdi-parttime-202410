import mongoose from 'mongoose'
import toggleLikePost from './toggleLikePost.js'

mongoose.connect('mongodb://localhost:27017/product')
    .then(() => {
        try {
            toggleLikePost('67c448ca832e2e9afdac3ce3', '67c47384c2d9dfa3dd780709')
                .then(result => console.log('post like toggled', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
