import 'dotenv/config'
import { expect } from 'chai'

import mongoose from 'mongoose'
import { User, Child, Event } from '../data/models.js'


import getEvent from './getEvent.js'

import { errors } from 'com'
const { NotFoundError } = errors

const { Types: { ObjectId } } = mongoose


describe('getEvent', () => {
    before(() => mongoose.connect(process.env.TEST_CALENDAR_MONGO_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Child.deleteMany(), Event.deleteMany()]))


    it('succeeds on existing user and events', () => {
        const user = new User({ name: 'Andrea', email: 'andrea@rincon.com', password: '123123123' })

        return Promise.all([
            user.save(),
            Child.create({ parent: user._id, name: 'Alana' }),
            Child.create({ parent: user._id, name: 'Agatha' })
        ])
            .then(([createdUser, createChild1, createChild2]) => {
                const event = new Event({
                    author: user._id.toString(),
                    children: [createChild1._id, createChild2._id],
                    title: 'clases de natacion',
                    date: new Date(2025, 2, 24, 17, 0),
                    description: 'buscar traje de baño'
                })

                return event.save()
            })

            .then(event => getEvent(user._id.toString(), event._id.toString()))


            .then(event => {
                expect(event).to.exist
                expect(event).to.have.property('title', 'clases de natacion')
                expect(new Date(event.date).getTime()).to.equal(new Date(2025, 2, 24, 17, 0).getTime())
                expect(event).to.have.property('description', 'buscar traje de baño')
                expect(event.children).to.be.an('array').to.have.lengthOf(2)
            })
    })


    it('fails on wrong user id', () => {
        let catchedError

        return User.create({ name: 'Alessandro', email: 'aless@andro.com', password: '123123123' })
            .then(user => {
                const event = new Event({
                    author: user._id.toString(),
                    children: [],
                    title: 'cumpleaños',
                    date: new Date(2025, 2, 24, 14, 0),
                    description: 'comprar regalo'
                })

                return event.save()
            })
            .then(event => getEvent(new ObjectId().toString(), event._id.toString()))
            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).to.be.instanceOf(NotFoundError)
                expect(catchedError.message).to.equal('User not Found')
            })
    })


    afterEach(() => Promise.all([User.deleteMany(), Event.deleteMany()]))

    after(() => mongoose.disconnect())
})




