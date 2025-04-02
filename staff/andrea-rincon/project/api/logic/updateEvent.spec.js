import 'dotenv/config';
import { expect } from 'chai';
import mongoose from 'mongoose';
import { Event, Child, User } from '../data/models.js';
import updateEvent from './updateEvent.js';
import { errors } from 'com';

const { NotFoundError, SystemError } = errors;
const { Types: { ObjectId } } = mongoose;

describe('updateEvent', () => {
    before(() => mongoose.connect(process.env.TEST_CALENDAR_MONGO_URL));

    beforeEach(() => Promise.all([User.deleteMany(), Child.deleteMany(), Event.deleteMany()]));

    it('succeeds on existing user and children', () => {
        let eventId;

        return User.create({ name: 'Carolina', email: 'caro@lina.com', password: '123123123' })
            .then(user => {
                return Child.create([
                    { parent: user._id, name: 'alana' },
                    { parent: user._id, name: 'agatha' }
                ])
                    .then(children => {
                        const [alana, agatha] = children;

                        return Event.create({
                            author: user._id.toString(),
                            children: ['67e6e62335b8e4ea128747d8'],
                            title: 'clases de natacion',
                            date: new Date(2025, 2, 24, 17, 0),
                            description: 'buscar traje de baño'
                        })
                            .then(event => {
                                eventId = event._id.toString();
                                expect(event).to.exist;
                                expect(event.title).to.equal('clases de natacion');
                                expect(new Date(event.date).getTime()).to.equal(new Date(2025, 2, 24, 17, 0).getTime());
                                expect(event.description).to.equal('buscar traje de baño');

                                return updateEvent(
                                    user._id.toString(),
                                    eventId,
                                    'Cumple Vicente prueba',
                                    ['alana', 'agatha'],
                                    new Date(2025, 2, 29, 17, 0),
                                    'Prueba spec'
                                );
                            })
                            .then(() => Event.findById(eventId))
                            .then(updatedEvent => {
                                expect(updatedEvent).to.exist;
                                expect(updatedEvent.author.toString()).to.equal(user._id.toString());
                                expect(updatedEvent.title).to.equal('Cumple Vicente prueba');
                                expect(new Date(updatedEvent.date).getTime()).to.equal(new Date(2025, 2, 29, 17, 0).getTime());
                                expect(updatedEvent.description).to.equal('Prueba spec');

                                // Verificar que los hijos fueron actualizados correctamente
                                expect(updatedEvent.children.map(c => c.toString())).to.have.members([alana._id.toString(), agatha._id.toString()]);
                            });
                    });
            });
    });

    it('fails on wrong eventId', () => {
        let errorCapturado;

        return User.create({ name: 'Carolina', email: 'caro@lina.com', password: '123123123' })
            .then(user => {
                return Child.create([
                    { parent: user._id, name: 'alana' },
                    { parent: user._id, name: 'agatha' }
                ])
                    .then(children => {
                        return Event.create({
                            author: user._id.toString(),
                            children: ['67e6e6b635b8e4ea128747e4'],
                            title: 'clases de natacion',
                            date: new Date(2025, 2, 24, 17, 0),
                            description: 'buscar traje de baño'
                        })
                            .then(() => {
                                return updateEvent(
                                    user._id.toString(),
                                    new ObjectId().toString(),
                                    'Cumple Vicente prueba',
                                    ['agatha'],
                                    new Date(2025, 2, 29, 17, 0),
                                    'Prueba spec'
                                )
                            })
                    })
            })
            .catch(error => {
                errorCapturado = error;
            })
            .finally(() => {
                expect(errorCapturado).to.exist;
                expect(errorCapturado).to.be.instanceOf(NotFoundError)
                expect(errorCapturado.message).to.equal('Event not found')
            });
    });

    afterEach(() => Promise.all([User.deleteMany(), Child.deleteMany(), Event.deleteMany()]))

    after(() => mongoose.disconnect())
})