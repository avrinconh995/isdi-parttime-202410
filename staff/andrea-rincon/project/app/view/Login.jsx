import logic from '../logic'
import { errors } from 'com'

const { CredentialsError, SystemError } = errors


function Login({ onUserLoggedIn, onRegisterClicked }) {
    console.log('Login -> render')

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset()

                    onUserLoggedIn()
                })
                .catch(error => {
                    if (error instanceof CredentialsError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, try againt later!')
                })
        } catch (error) {
            alert(error.message)

            console.error(error)

        }
    }

    const handleRegisterLinkClick = event => {
        event.preventDefault()

        onRegisterClicked()
    }


    return <main className="main mt-6">
        <div className="flex justify-start w-full p-4">
            <h2 className="font-montserrat text-3xl font-bold text-black mb-8 text-center">Inicia Sesión</h2>
        </div>

        <form className="form justify-center p-4" on Submit={handleFormSubmit}>
            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="email" id="email" />

            <label className="label" htmlFor="password">Contraseña</label>
            <input className="input" type="password" id="password" />

            <div className="flex justify-center w-full p-3">
                <button className="bg-darkblue text-white text-xl font-montserrat bold py-3 px-8 rounded-full shadow-md mb-8" type="submit ">Inicia Sesión</button>
            </div>
        </form>

        <div className="flex justify-start w-full p-3">
            <a className=" text-darkblue  text-lg font-montserrat font-extrabold underline ml-1 " href="" onClick={handleRegisterLinkClick} >Regístrate </a>
        </div>

    </main>
}

export default Login