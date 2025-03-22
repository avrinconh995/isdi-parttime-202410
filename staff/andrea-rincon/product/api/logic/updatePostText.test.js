import 'dotenv/config'
import mongoose from 'mongoose'
import updatePostText from './updatePostText.js'

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        try {
            updatePostText('67c448ca832e2e9afdac3ce3', '67c47384c2d9dfa3dd780709', 'new 2 2')
                .then(result => console.log('post text updated', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))



