import 'dotenv/config'
import { expect } from 'chai'

import mongoose from 'mongoose'
import { User, Child } from '../data/models.js'


import getChildren from './getChildren.js'

import { errors } from 'com'
const { NotFoundError } = errors

const { Types: { ObjectId } } = mongoose


describe('getChildren', () => {
    before(() => mongoose.connect(process.env.TEST_CALENDAR_MONGO_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Child.deleteMany()]))

    it('succeeds retrieving children of a user', () => {
        let userId

        return User.create({ name: 'Carolina', email: 'caro@lina.com', password: '123123123' })

            .then(user => {
                userId = user._id.toString()

                return Child.create([
                    { name: 'Alana', parent: userId },
                    { name: 'Agatha', parent: userId }
                ])
            })
            .then(() => getChildren(userId))
            .then(children => {
                children = children.sort((a, b) => a.name.localeCompare(b.name))

                expect(children).to.be.an('array').with.lengthOf(2)
                expect(children[0]).to.have.property('name', 'Agatha')
                expect(children[1]).to.have.property('name', 'Alana')
            })
    })

    it('fails on wrong user id', () => {
        let catchedError

        return User.create({ name: 'Andrea Victoria', email: 'andrea@andrea.com', password: '123123123' })
            .then(() => getChildren(new ObjectId().toString()))
            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).to.be.instanceOf(NotFoundError)
                expect(catchedError.message).to.equal('User not Found')
            })
    })

    it('fails wrong child id', () => {
        let catchedError
        let userId

        return User.create({ name: 'bea', email: 'bea@bea.com', password: '123123123' })
            .then(user => {
                userId = user._id.toString()
                return Child.create([
                    { name: 'Alana', parent: userId }

                ])
            })
            .then(() => getChildren(new ObjectId().toString())) // Pasamos un userId inexistente
            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).to.be.instanceOf(NotFoundError)
                expect(catchedError.message).to.equal('User not Found')
            })
    })


    it('returns an empty array when the user has no children', () => {
        let userId

        return User.create({ name: 'Bea', email: 'bea@bea.com', password: '123123123' })
            .then(user => {
                userId = user._id.toString()
                return getChildren(userId)
            })
            .then(children => {
                expect(children).to.be.an('array').that.is.empty // Esperamos un array vacío
            })
    })

    afterEach(() => Promise.all([User.deleteMany(), Child.deleteMany()]))

    after(() => mongoose.disconnect())
})


