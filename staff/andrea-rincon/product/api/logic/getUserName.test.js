import getUserName from './getUserName.js'

try {
    const name = getUserName('m4abh1225zh')

    console.log(name)
} catch (error) {
    console.error(error)
}
