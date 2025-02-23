
import logic from '../logic'
import { errors } from 'com'

const { DuplicityError, SystemError } = errors

function Register({ onUserRegistered, onLoginClicked }) {
    console.log('Register -> render')

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            logic.registerUser(name, email, username, password)
                .then(() => {
                    form.reset()

                    onUserRegistered()
                })
                .catch(error => {
                    //alert(error.message)
                    if (error instanceof DuplicityError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, try againg later')

                    console.error(error)
                })
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    const handleLoginLinkClick = event => {
        event.preventDefault()

        onLoginClicked()
    }

    return <main className="main ">
        <h2 className="text-bluelight font-solid 20">Register</h2>

        <form className="form" onSubmit={handleFormSubmit}>

            <label htmlFor="name">Name</label>
            <input className="input" type="text" id="name" />

            <label htmlFor="email">E-mail</label>
            <input className="input" type="email" id="email" />

            <label htmlFor="username">Username</label>
            <input className="input" type="text" id="username" />

            <label htmlFor="password">Password</label>
            <input className="input" type="password" id="password" />

            <div className="button px-6 py-2 rounded-md text-[20px] flex justify-end ">
                <button type="submit">Register</button>
            </div>
        </form>

        <a href="" className="text-white bold underline" onClick={handleLoginLinkClick}>Login</a>
    </main >
}

export default Register