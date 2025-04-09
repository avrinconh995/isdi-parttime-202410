import 'dotenv/config'
import { expect } from 'chai'

import mongoose from 'mongoose'
import { User } from '../data/models.js'

import { errors } from 'com'
const { DuplicityError } = errors

import bcrypt from 'bcryptjs'

import registerUser from './registerUser.js'

describe('registerUser', () => {
    before(() => mongoose.connect(process.env.TEST_CALENDAR_MONGO_URL))

    beforeEach(() => User.deleteMany())

    it('succeeds on new user', () => {
        return registerUser('Andrea Rincon', 'andrea@rincon.com', '123123123')
            .then(result => {
                expect(result).to.be.undefined

                return User.findOne()
            })
            .then(user => {
                expect(user.name).to.be.equal('Andrea Rincon')
                expect(user.email).to.be.equal('andrea@rincon.com')

                return bcrypt.compare('123123123', user.password)

                    .then(match => expect(match).to.be.true)
            })

    })

    it('fails on existing user', () => {
        let catchedError

        return bcrypt.hash('123123123', 10)
            .then(hash => User.create({ name: 'Alessandro Marescalco', email: 'alessandro@marescalco.com', password: hash }))
            .then(() => registerUser('Alessandro Marescalco', 'alessandro@marescalco.com', '123123123'))
            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).to.be.instanceOf(DuplicityError)
                expect(catchedError.message).to.equal('El usuario ya existe')
            })
    })
    afterEach(() => User.deleteMany())

    after(() => mongoose.disconnect())
})


