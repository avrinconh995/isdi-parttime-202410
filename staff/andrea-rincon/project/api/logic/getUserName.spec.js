import 'dotenv/config'
import { expect } from 'chai'

import mongoose from 'mongoose'
import { User } from '../data/models.js'


import getUserName from './getUserName.js'

import { errors } from 'com'
const { NotFoundError } = errors

const { Types: { ObjectId } } = mongoose


describe('getUserName', () => {
    before(() => mongoose.connect(process.env.TEST_CALENDAR_MONGO_URL))

    beforeEach(() => User.deleteMany())

    it('succeeds on existing user', () => {
        return User.create({ name: 'Amanda', email: 'amanda@amanda.com', password: '123123123' })
            .then(user => getUserName(user._id.toString()))
            .then(name => expect(name).to.equal('Amanda'))
    })

    it('fails on wrong user id', () => {
        let catchedError

        return User.create({ name: 'Amanda', email: 'amanda@amanda.com', password: '123123123' })
            .then(user => getUserName(new ObjectId().toString()))
            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).to.be.instanceOf(NotFoundError)
                expect(catchedError.message).to.equal('Usuario no encontrado')
            })
    })

    afterEach(() => User.deleteMany())

    after(() => mongoose.disconnect())
})

