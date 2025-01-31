import extractPayloadFromToken from '../util/extractPayloadFromToken'

const getuserId = () => {
    if (sessionStorage.token) {
        const payload = extractPayloadFromToken(sessionStorage.token)

        const { sub: userId } = payload

        return userId
    }

    return null
}

export default getuserId