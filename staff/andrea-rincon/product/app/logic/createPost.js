import validate from './helper/validate'

const createPost = (image, text) => {
    validate.image(image)
    validate.text(text)

    return fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, text })
    })
        .catch(error => { throw new Error(error.message) })
        .then(res => {
            const { status } = res

            if (status === 201) return

            return res.json()
                .then(body => {
                    const { error, message } = body

                    throw new Error(message)
                })
        })
}

export default createPost
