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
        const password = form.password.value

        try {
            logic.registerUser(name, email, password)
                .then(() => {
                    form.reset()

                    onUserRegistered()
                })
                .catch(error => {
                    if (error instanceof DuplicityError)
                        alert(error.message)
                    if (error instanceof SystemError)
                        alert('Sorry, try again later')

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

    return <main className="main mt-6">
        <div className="flex justify-start w-full p-4">
            <h2 className="font-montserrat text-3xl font-bold text-black mb-8 text-center">Crea tu perfil</h2>
        </div>

        <form className="form" onSubmit={handleFormSubmit}>
            <label className="label" htmlFor="name">Nombre</label>
            <input className="input" type="text" id="name" />

            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="email" id="email" />

            <label className="label" htmlFor="password">Contraseña</label>
            <input className="input" type="password" id="password" />

            <div className="flex justify-center w-full p-3">
                <button className="bg-darkblue text-white text-xl font-montserrat bold py-3 px-8 rounded-full shadow-md mb-8" type="submit">Regístrate</button>
            </div>

        </form>

        <div className="flex justify-start w-full p-3">
            <a href="" onClick={handleLoginLinkClick} className=" text-darkblue  text-lg font-montserrat font-extrabold underline ml-1 ">Inicia Sesión</a>
        </div>


    </main>
}

export default Register