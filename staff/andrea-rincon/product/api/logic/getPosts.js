import db from '../data/db.js'
import { User, Post } from '../data/models.js'


const getPosts = userId => {
    const { users, posts } = db

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            return Post.find().populate('author', 'username').lean()
                .then(posts => {
                    posts.forEach(post => {
                        post.id = post._id.toString()
                        delete post._id

                        delete post.__v

                        if (post.author._id) {
                            post.author.id = post.author._id.toString()
                            delete post.author._id
                        }
                        post.own = post.author.id === userId

                    })

                    return posts
                })
        })
}
export default getPosts