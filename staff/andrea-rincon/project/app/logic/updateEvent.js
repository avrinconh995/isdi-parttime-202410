import { validate, errors } from 'com'

const updateEvent = (eventId, title, children, date, description) => {
    validate.id(eventId, 'eventId')
    validate.title(title)
    validate.children(children)
    validate.date(date)
    validate.description(description)

    return fetch(`${import.meta.env.VITE_API_URL}/events/${eventId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, children, date, description })
    })
        .catch(error => { throw new Error(error.message) })
        .then(res => {
            const { status } = res

            if (status === 204)
                return

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default updateEvent
