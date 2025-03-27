import { validate, errors } from 'com'

const createEvent = (children, title, date, description) => {
    validate.children(children)
    validate.title(title)
    validate.date(date)
    validate.description(description)

    return fetch(`${import.meta.env.VITE_API_URL}/events`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ children, title, date, description })
    })
        .catch(error => { throw new Error(error.message) })
        .then(res => {
            const { status } = res

            if (status === 201)
                return

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default createEvent