import 'dotenv/config'
import { expect } from 'chai'

import mongoose from 'mongoose'
import { User } from '../data/models.js'


import authenticateUser from './authenticateUser.js'

import { errors } from 'com'
const { CredentialsError } = errors

import bcrypt from 'bcryptjs'


describe('authenticateUser', () => {
    before(() => mongoose.connect(process.env.TEST_CALENDAR_MONGO_URL))

    beforeEach(() => User.deleteMany())

    it('succeeds on existing user', () => {
        return bcrypt.hash('123123123', 10)
            .then(hash => User.create({ name: 'Andrea Rincon', email: 'andrea@rincon.com', password: hash }))
            .then(() => authenticateUser('andrea@rincon.com', '123123123'))
            .then(userId => {
                expect(userId).to.be.a.string

                return User.findById(userId)
            })
            .then(user => {
                expect(user.email).to.equal('andrea@rincon.com')

                return bcrypt.compare('123123123', user.password)
            })
            .then(match => expect(match).to.be.true)
    })

    it('fails on wrong email', () => {
        let catchedError

        return bcrypt.hash('123123123', 10)
            .then(hash => User.create({ name: 'Alessandro Marescalco', email: 'alessandro@marescalco.com', password: hash }))
            .then(() => authenticateUser('alessandro@ma.com', '123123123'))
            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).instanceOf(CredentialsError)
                expect(catchedError.message).to.be.equal('wrong credentials')
            })
    })

    it('fails on wrong password', () => {
        let catchedError

        return bcrypt.hash('123123123', 10)
            .then(hash => User.create({ name: 'Desiree', email: 'desiree@desiree.com', password: hash }))
            .then(() => authenticateUser('desiree@desiree.com', '123123123LT'))
            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).instanceOf(CredentialsError)
                expect(catchedError.message).to.equal('wrong credentials')
            })

    })
    afterEach(() => User.deleteMany())

    after(() => mongoose.disconnect())
})




