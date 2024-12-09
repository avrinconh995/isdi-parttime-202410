import getUserName from './getUserName.js'

try {
    const name = getUserName('m41rjo7ulg')

    console.log(name)
} catch (error) {
    console.error(error)
}
