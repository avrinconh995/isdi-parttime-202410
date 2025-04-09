import 'dotenv/config'
import { expect } from 'chai'

import mongoose from 'mongoose'
import { User, Event } from '../data/models.js'


import getDaysOfMonthsWithEvents from './getDaysOfMonthsWithEvents.js'

import { errors } from 'com'
const { NotFoundError } = errors

const { Types: { ObjectId } } = mongoose


describe('getDaysOfMonthsWithEvents', () => {
    before(() => mongoose.connect(process.env.TEST_CALENDAR_MONGO_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Event.deleteMany()]))


    it('succeeds on existing user and events', () => {
        const andrea = new User({ name: 'Andrea', email: 'andrea@rincon.com', password: '123123123' })


        return andrea.save()
            .then(() => {
                const event1 = new Event({
                    author: andrea._id.toString(),
                    title: 'clases de natacion',
                    date: new Date(2025, 2, 24, 17, 0),
                    description: 'buscar traje de baño'
                })

                const event2 = new Event({
                    author: andrea._id.toString(),
                    title: 'cumple pablo',
                    date: new Date(2025, 2, 17, 14, 0),
                    description: 'comprar regalo'
                })

                return Promise.all([event1.save(), event2.save()])
            })

            .then(() => {
                return getDaysOfMonthsWithEvents(andrea._id.toString(), 2025, 3,)
            })
            .then(result => {
                expect(result).to.have.members([24, 17])
            })

    })

    it('fails on wrong user id', () => {
        let catchedError

        return User.create({ name: 'Alessandro', email: 'aless@andro.com', password: '123123123' })
            .then(user => getDaysOfMonthsWithEvents(new ObjectId().toString(), 2025, 3))

            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).to.be.instanceOf(NotFoundError)
                expect(catchedError.message).to.equal('Usuario no encontrado')
            })
    })

    afterEach(() => Promise.all([User.deleteMany(), Event.deleteMany()]))

    after(() => mongoose.disconnect())
})




