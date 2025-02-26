import mongoose from 'mongoose'

const { Schema, model, Types: { ObjectId } } = mongoose

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const child = new Schema({
    parent: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const event = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    children: [{
        type: ObjectId,
        ref: 'User',
        required: true
    }],
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }

})

const User = model('User', user)
const Child = model('Child', child)
const Event = model('Event', event)

export {
    User,
    Child,
    Event
}