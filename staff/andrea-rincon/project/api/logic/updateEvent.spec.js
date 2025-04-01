import 'dotenv/config'
import { expect } from 'chai'
import mongoose from 'mongoose'
import { Event, Child, User } from '../data/models.js'
import updateEvent from './updateEvent.js'
import { errors } from 'com'

const { NotFoundError, SystemError } = errors
const { Types: { ObjectId } } = mongoose

describe('updateEvent', () => {
    before(() => mongoose.connect(process.env.TEST_CALENDAR_MONGO_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Child.deleteMany(), Event.deleteMany()]))

    it('succeeds on existing user and children', () => {
        let eventId

        return User.create({ name: 'Carolina', email: 'caro@lina.com', password: '123123123' })
            .then(user => {
                return Child.create([
                    { parent: user._id, name: 'Alana' },
                    { parent: user._id, name: 'Agatha' }
                ])
                    .then(children => {
                        const [alana, agatha] = children

                        return Event.create({
                            author: user._id.toString(),
                            children: [alana._id.toString()],
                            title: 'clases de natacion',
                            date: new Date(2025, 2, 24, 17, 0),
                            description: 'buscar traje de baño'
                        })
                            .then(event => {
                                eventId = event._id.toString(),
                                    expect(event).to.exist
                                expect(event.title).to.equal('clases de natacion')
                                expect(new Date(event.date).getTime()).to.equal(new Date(2025, 2, 24, 17, 0).getTime())
                                expect(event.description).to.equal('buscar traje de baño')

                                return updateEvent(
                                    eventId,
                                    user._id.toString(),
                                    'Cumple Vicente prueba',
                                    [alana._id.toString(), agatha._id.toString()],
                                    new Date(2025, 2, 29, 17, 0),
                                    'Prueba spec'
                                )
                            })
                            .then(() => Event.findById(eventId))
                            .then(updatedEvent => {
                                expect(updatedEvent).to.exist
                                expect(updatedEvent.author.toString()).to.equal(user._id.toString())
                                expect(updatedEvent.title).to.equal('Cumple Vicente prueba')
                                expect(new Date(updatedEvent.date).getTime()).to.equal(new Date(2025, 2, 29, 17, 0).getTime())
                                expect(updatedEvent.description).to.equal('Prueba spec')

                                // Verificar que los hijos fueron actualizados correctamente
                                expect(updatedEvent.children.map(c => c.toString())).to.have.members([alana._id.toString(), agatha._id.toString()])
                            })
                    })
            })
    })
    it('fails on wrong eventId', () => {

        let catchedError

        return User.create({ name: 'Carolina', email: 'caro@lina.com', password: '123123123' })
            .then(user => {
                return Child.create([ // Asegúrate de que esta parte crea los niños antes de usar la variable agatha
                    { parent: user._id, name: 'Alana' },
                    { parent: user._id, name: 'Agatha' }
                ])
                    .then(children => {
                        const [alana, agatha] = children // Aquí obtienes correctamente los niños

                        return Event.create({
                            author: user._id.toString(),
                            children: [alana._id.toString()],
                            title: 'clases de natacion',
                            date: new Date(2025, 2, 24, 17, 0),
                            description: 'buscar traje de baño'
                        })
                            .then(() => {
                                // Ahora se está usando agatha correctamente
                                return updateEvent(
                                    new ObjectId().toString(), // ID inválido
                                    user._id.toString(),
                                    'Cumple Vicente prueba',
                                    [agatha._id.toString()], // Aquí utilizas agatha correctamente
                                    new Date(2025, 2, 29, 17, 0),
                                    'Prueba spec'
                                )
                            })
                    })
            })
            .catch(error => {
                catchedError = error
            })
            .finally(() => {
                expect(catchedError).to.exist
                expect(catchedError).to.be.instanceOf(SystemError) //
                expect(catchedError.message).to.equal('Event not found') // Mensaje esperado
            })
    })


    afterEach(() => Promise.all([User.deleteMany(), Child.deleteMany(), Event.deleteMany()]))

    after(() => mongoose.disconnect())
})
