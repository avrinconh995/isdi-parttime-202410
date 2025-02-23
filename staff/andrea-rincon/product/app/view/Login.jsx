import logic from '../logic'
import { errors } from 'com'

const { CredentialsError, SystemError } = errors

function Login({ onUserLoggedIn, onRegisterClicked }) {
    console.log('Login -> render')

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset()

                    onUserLoggedIn()
                })
                .catch(error => {
                    alert(error.message)

                    console.error(error)
                })


        } catch (error) {
            if (error instanceof CredentialsError)
                alert(error.message)
            else if (error instanceof SystemError)
                alert('Sorry, try againg later.')
        }
    }
    const handleRegisterLinkClick = event => {
        event.preventDefault()

        onRegisterClicked()
    }

    return <main>
        <h2 className="text-bluelight font-solid 20">Login</h2>

        <form className="form" onSubmit={handleFormSubmit} >
            <label htmlFor="username">Username</label>
            <input className="input" type="text" id="username" />

            <label htmlFor="password">Password</label>
            <input className="input" type="password" id="password" />

            <div className="button px-6 py-2 rounded-md text-[20px] flex justify-end ">
                <button type="submit">Login</button>
            </div>
        </form>

        <a href="" className="text-white bold underline" onClick={handleRegisterLinkClick}>Register</a>
    </main>
}

export default Login