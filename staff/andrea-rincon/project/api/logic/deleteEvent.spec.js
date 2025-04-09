import 'dotenv/config';
import { expect } from 'chai';
import mongoose from 'mongoose';
import { User, Event, Child } from '../data/models.js';
import deleteEvent from './deleteEvent.js';
import { errors } from 'com';

const { NotFoundError } = errors;
const { Types: { ObjectId } } = mongoose;

describe('deleteEvent', () => {
    before(() => mongoose.connect(process.env.TEST_CALENDAR_MONGO_URL));

    beforeEach(() => Promise.all([User.deleteMany(), Child.deleteMany(), Event.deleteMany()]));

    it('succeeds on existing user and event', () => {
        const user = new User({ name: 'Andrea', email: 'andrea@rincon.com', password: '123123123' })

        return Promise.all([
            user.save(),
            Child.create({ parent: user._id, name: 'Alana' }),
            Child.create({ parent: user._id, name: 'Agatha' })
        ])
            .then(([createdUser, createChild1, createChild2]) => {
                return Event.create({
                    author: user._id,
                    children: [createChild1._id, createChild2._id],
                    title: 'cita Dra Ana',
                    date: new Date(2025, 2, 24, 17, 0),
                    description: 'preguntar por alergias'
                })
            })
            .then(event => {
                return deleteEvent(user._id.toString(), event._id.toString())
            })
            .then(result => {
                expect(result).to.be.undefined

                return Event.findOne()
            })
            .then(event => {
                expect(event).to.be.null
            })
    })



    it('fails on wrong user id', () => {
        let catchedError
        const user = new User({ name: 'Andrea', email: 'andrea@rincon.com', password: '123123123' })

        return Promise.all([
            user.save(),
            Child.create({ parent: user._id, name: 'Alana' }),

        ])
            .then(([createdUser, createChild1]) => {
                return Event.create({
                    author: user._id,
                    children: [createChild1._id],
                    title: 'visita Zoo',
                    date: new Date(2025, 2, 24, 17, 0),
                    description: 'llevar gorra',
                })
                    .then(event => {
                        return deleteEvent(new ObjectId().toString(), event._id.toString());
                    })
                    .catch(error => catchedError = error)
                    .finally(() => {
                        expect(catchedError).to.be.instanceOf(NotFoundError)
                        expect(catchedError.message).to.equal('Usuario no encontrado')
                    })
            })
    })


    it('fails on event not found', () => {
        let catchedError

        return User.create({ name: 'Andrea', email: 'andrea@rincon.com', password: '123123123' })
            .then(user => {
                return deleteEvent(user._id.toString(), new ObjectId().toString())
            })
            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).to.be.instanceOf(NotFoundError)
                expect(catchedError.message).to.equal('Evento no encontrado')
            })
    })

    afterEach(() => Promise.all([User.deleteMany(), Child.deleteMany(), Event.deleteMany()]))

    after(() => mongoose.disconnect());


})


