import 'dotenv/config'
import { expect } from 'chai'

import mongoose from 'mongoose'
import { User, Event } from '../data/models.js'


import getEventsFromDay from './getEventsFromDay.js'

import { errors } from 'com'
const { NotFoundError } = errors

const { Types: { ObjectId } } = mongoose


describe('getEventsFromDay', () => {
    before(() => mongoose.connect(process.env.TEST_CALENDAR_MONGO_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Event.deleteMany()]))


    it('succeeds on existing user and events', () => {
        const andrea = new User({ name: 'Andrea', email: 'andrea@rincon.com', password: '123123123' })


        return andrea.save()
            .then(() => {
                const event1 = new Event({
                    author: andrea._id.toString(),
                    child: ['Alana'],
                    title: 'clases de natacion',
                    date: new Date(2025, 2, 24, 17, 0),
                    description: 'buscar traje de baño'
                })

                const event2 = new Event({
                    author: andrea._id.toString(),
                    child: ['Agatha'],
                    title: 'cumple pablo',
                    date: new Date(2025, 2, 24, 14, 0),
                    description: 'comprar regalo'
                })

                const event3 = new Event({
                    author: andrea._id.toString(),
                    child: ['Agatha', 'Alana'],
                    title: 'visita Zoo',
                    date: new Date(2025, 2, 24, 10, 0),
                    description: 'ponerles protector solar'
                })

                const event4 = new Event({
                    author: andrea._id.toString(),
                    child: [],
                    title: 'viaje Disney',
                    date: new Date(2025, 2, 24, 20, 0),
                    description: 'confirmar DNI'
                })


                return Promise.all([event1.save(), event2.save(), event3.save(), event4.save()])
            })

            .then(() => {
                return getEventsFromDay(andrea._id.toString(), 2025, 3, 24)
            })
            .then(result => {
                expect(result).to.be.an('array').with.lengthOf(4)

                expect(result[0]).to.have.property('title', 'visita Zoo')
                expect(new Date(result[0].date).getTime()).to.equal(new Date(2025, 2, 24, 10, 0).getTime())

                expect(result[1]).to.have.property('title', 'cumple pablo')
                expect(new Date(result[1].date).getTime()).to.equal(new Date(2025, 2, 24, 14, 0).getTime())


                expect(result[2]).to.have.property('title', 'clases de natacion')
                expect(new Date(result[2].date).getTime()).to.equal(new Date(2025, 2, 24, 17, 0).getTime())

                expect(result[3]).to.have.property('title', 'viaje Disney')
                expect(new Date(result[3].date).getTime()).to.equal(new Date(2025, 2, 24, 20, 0).getTime())
            })

    })

    it('fails on wrong user id', () => {
        let catchedError

        return User.create({ name: 'Alessandro', email: 'aless@andro.com', password: '123123123' })
            .then(user => getEventsFromDay(new ObjectId().toString(), 2025, 3, 24))

            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).to.be.instanceOf(NotFoundError)
                expect(catchedError.message).to.equal('Usuario no encontrado')
            })
    })

    afterEach(() => Promise.all([User.deleteMany(), Event.deleteMany()]))

    after(() => mongoose.disconnect())
})




