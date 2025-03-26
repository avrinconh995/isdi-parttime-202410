import { errors } from 'com'

const getDaysOfMonthsWithEvents = (year, month) => {
    return fetch(`${import.meta.env.VITE_API_URL}/events/${year}/${month}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        },
    })
        .catch(error => { throw new Error(error.message) })
        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
                    .then(days => days)

            return res.json()
                .catch(error => { throw new Error(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })

        })
}

export default getDaysOfMonthsWithEvents


