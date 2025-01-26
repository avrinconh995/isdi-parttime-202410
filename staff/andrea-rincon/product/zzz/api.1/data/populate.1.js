import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://localhost:27017')


client.connect()
    .then(connection => {
        const db = connection.db('test')

        const users = db.collection('users')
        const posts = db.collection('posts')

        // users.insertOne({ name: 'Peter Pan', email: 'peter@pan.com', username: 'peterpan', password: '123123123' })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        // users.deleteOne({ _id: new ObjectId('678ff895922ddc947fb5cf35') })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        // users.updateOne({ _id: new ObjectId('678ffe3e74d7332d6aa2b235') }, { $set: { password: '12341234' } })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        posts.insertOne({ author: new ObjectId('678ffe3e74d7332d6aa2b235'), image: 'https://i.ytimg.com/vi/9oWEZSL_53U/maxresdefault.jpg', text: 'prueba posts', date: new Date() })
            .then(result => console.log(result))
            .catch(error => console.error(error))




    })
    .catch(error => console.error(error))