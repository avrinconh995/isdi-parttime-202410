import 'dotenv/config'
import { expect } from 'chai'

import mongoose from 'mongoose'
import { User, Child, Event } from '../data/models.js'


import createEvent from './createEvent.js'

import { errors } from 'com'
const { NotFoundError } = errors

const { Types: { ObjectId } } = mongoose


describe('createEvent', () => {
    before(() => mongoose.connect(process.env.TEST_CALENDAR_MONGO_URL))


    beforeEach(() => Promise.all([User.deleteMany(), Child.deleteMany(), Event.deleteMany()]))


    it('succeeds on existing user', () => {
        return User.create({ name: 'Carolina', email: 'caro@lina.com', password: '123123123' })

            .then(user => {
                return createEvent(
                    user._id.toString(),
                    ['alana', 'agatha'],//child 
                    'cita Dra Ana',//title
                    new Date(2025, 2, 24, 17, 0),//fecha
                    'preguntar por alergias'//nota
                )
                    .then(result => {
                        expect(result).to.be.undefined

                        return Event.findOne()
                    })
                    .then(event => {
                        expect(event).to.exist
                        expect(event.author.toString()).to.equal(user._id.toString())
                        expect(event.title).to.equal('cita Dra Ana')
                        expect(event.date.getTime()).to.equal(new Date(2025, 2, 24, 17, 0).getTime())
                        expect(event.description).to.equal('preguntar por alergias')

                        return Child.find({ _id: { $in: event.children } })

                    })
            })

    })

    it('fails on wrong user id', () => {
        let catchedError

        return User.create({ name: 'Amanda', email: 'amanda@amanda.com', password: '123123123' })

            .then(user => createEvent(
                new ObjectId().toString(),
                ['alana', 'agatha'],//child 
                'cita medica',//title
                new Date(2025, 2, 24, 17, 0),//fecha
                'preguntar alergia al huevo'//nota
            ))
            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).to.be.instanceOf(NotFoundError)
                expect(catchedError.message).to.equal('Usuario no encontrado')
            })


    })

    it('creates an event with a single child', () => {
        return User.create({ name: 'Carolina', email: 'carolina@carolina.com', password: '123123123' })
            .then(user => {
                return createEvent(user._id.toString(), ['alana'], 'cumple Vicente', new Date(2025, 5, 24, 17, 0), 'llevar regalo')
            })
            .then(() => Event.findOne().populate('children'))
            .then(event => {
                expect(event).to.exist
                expect(event.children).to.have.lengthOf(1)
            })
    })

    it('creates an event with a new child', () => {
        return User.create({ name: 'Carolina', email: 'carolina@carolina.com', password: '123123123' })
            .then(user => {
                return createEvent(user._id.toString(), ['peter'], 'Primera visita médica', new Date(2025, 6, 24, 14, 0), 'Revisión inicial')
                    .then(() => Child.findOne({ name: 'peter' }))
                    .then(child => {
                        expect(child).to.exist
                        expect(child.parent.toString()).to.equal(user._id.toString())
                    })
            })
    })

    it('creates an event with a mix of existing and new children', () => {
        return User.create({ name: 'Carolina', email: 'carolina@carolina.com', password: '123123123' })
            .then(user => Child.create({ name: 'alana', parent: user._id }))
            .then(() => {
                return User.findOne({ email: 'carolina@carolina.com' })
                    .then(user => createEvent(user._id.toString(), ['alana', 'peter'], 'Evento mixto', new Date(2025, 7, 24, 15, 0), 'Prueba de niños mixtos'))
                    .then(() => Event.findOne().populate('children'))
                    .then(event => {
                        expect(event).to.exist;
                        expect(event.children).to.have.lengthOf(2);
                        const childNames = event.children.map(child => child.name);
                        expect(childNames).to.include.members(['alana', 'peter']);
                        return Child.findOne({ name: 'peter' });
                    }).then(childPeter => {
                        expect(childPeter).to.exist;
                    })
            })
    })

    it('creates an event with existing children', () => {
        return User.create({ name: 'Carolina', email: 'carolina@carolina.com', password: '123123123' })
            .then(user => Promise.all([
                Child.create({ name: 'alana', parent: user._id }),
                Child.create({ name: 'agatha', parent: user._id })
            ]))
            .then(() => {
                return User.findOne({ email: 'carolina@carolina.com' })
                    .then(user => createEvent(user._id.toString(), ['alana', 'agatha'], 'Evento mixto', new Date(2025, 7, 24, 15, 0), 'Prueba de niños mixtos'))
                    .then(() => Event.findOne().populate('children'))
                    .then(event => {
                        expect(event).to.exist;
                        expect(event.children).to.have.lengthOf(2);
                        const childNames = event.children.map(child => child.name);
                        expect(childNames).to.include.members(['alana', 'agatha']);
                    })
            })
    })

    it('creates an event without children', () => {
        return User.create({ name: 'Carolina', email: 'carolina@carolina.com', password: '123123123' })
            .then(user => createEvent(user._id.toString(), [], 'Reunión de padres', new Date(2025, 3, 24, 18, 0), 'Discusión general'))
            .then(() => Event.findOne())
            .then(event => {
                expect(event).to.exist
                expect(event.children).to.be.empty
            })
    })

    afterEach(() => Promise.all([User.deleteMany(), Child.deleteMany(), Event.deleteMany()]))

    after(() => mongoose.disconnect())
})

