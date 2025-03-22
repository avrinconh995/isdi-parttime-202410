import 'dotenv/config'
import { expect } from 'chai'

import mongoose from 'mongoose'
import { User } from '../data/models.js'

import registerUser from './registerUser.js'

import { errors } from 'com'
const { DuplicityError } = errors

import bcrypt from 'bcryptjs'

describe('registerUser', () => {
    before(() => mongoose.connect(process.env.TEST_MONGO_URL))

    beforeEach(() => User.deleteMany())

    it('succeed on new user', () => {
        return registerUser('Bluey', 'bluey@bluey.com', 'bluey', '123123123')
            .then(result => {
                expect(result).to.be.undefined

                return User.findOne()
            })
            .then(user => {
                expect(user.name).to.equal('Bluey')
                expect(user.email).to.equal('bluey@bluey.com')
                expect(user.username).to.equal('bluey')
                expect(user.password).to.equal('123123123')

                return bcrypt.compare('123123123', user.password)

            })
            .then(match => expect(match).to.be.true)
    })

    it('fails on existing user', () => {
        let catchedError

        return bcrypt.hash('123123123', 10)

            .then(hash => User.create({ name: 'Bingo', email: 'bingo@bingo.com', username: 'bingo', password: hash }))
            .then(() => registerUser('Bingo', 'bingo@bingo.com', 'bingo', '123123123'))
            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).to.be.instanceOf(DuplicityError)
                expect(catchedError.message).to.be.equal('user already exists')
            })

    })

    afterEach(() => User.deleteMany())

    after(() => mongoose.disconnect())


})