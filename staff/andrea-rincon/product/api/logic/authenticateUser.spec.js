import 'dotenv/config'
import { expect } from 'chai'

import mongoose from 'mongoose'
import { User } from '../data/models.js'

import authenticateUser from './authenticateUser.js'

import { errors } from 'com'
const { CredentialsError } = errors

describe('authenticateUser', () => {
    before(() => mongoose.connect(process.env.TEST_MONGO_URL))

    beforeEach(() => User.deleteMany())

    it('succeeds on existing User', () => {

        return User.create({ name: 'Chili', email: 'chili@chili.com', username: 'chili', password: '123123123' })
            .then(() => authenticateUser('chili', '123123123'))
            .then(userId => {
                expect(userId).to.be.a.string

                return User.findById(userId)
            })
            .then(user => {
                expect(user.username).to.equal('chili')
                expect(user.password).to.equal('123123123')
            })
    })

    it('fails on wrong username', () => {
        let catchedError

        return User.create({ name: 'Chili', email: 'chili@chili.com', username: 'chili', password: '123123123' })
            .then(() => authenticateUser('chilli', '123123123'))
            .catch(error => catchedError = error)
            .then(() => {
                expect(catchedError).instanceOf(CredentialsError)
                expect(catchedError.message).to.equal('wrong credentials')
            })
    })

    it('fails on wrong password', () => {
        let catchedError

        return User.create({ name: 'Chili', email: 'chili@chili.com', username: 'chili', password: '123123123' })
            .then(() => authenticateUser('chili', '1231231235'))
            .catch(error => catchedError = error)
            .then(() => {
                expect(catchedError).instanceOf(CredentialsError)
                expect(catchedError.message).to.equal('wrong credentials')
            })
    })
})

afterEach(() => User.deleteMany())

after(() => mongoose.disconnect())
