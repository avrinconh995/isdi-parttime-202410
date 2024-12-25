import db from '../data/db.js'
import uuid from '../data/uuid.js'
import validate from './helper/validate.js'

const createPost = (userId, image, text) => {
    validate.id(userId, 'userId')
    validate.image(image)
    validate.text(text)


    const { posts } = db

    const post = {
        id: uuid(),
        author: userId,
        image,
        text,
        date: new Date().toISOString()
    }

    posts.push(post)

    db.posts = posts
}

export default createPost