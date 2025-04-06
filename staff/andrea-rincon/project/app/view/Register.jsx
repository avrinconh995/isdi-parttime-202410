import { useCalendarContext } from '../context'
import logic from '../logic'

import { errors } from 'com'
const { DuplicityError, SystemError } = errors

function Register({ onUserRegistered, onLoginClicked }) {
    console.log('Register -> render')

    const { alert } = useCalendarContext()

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

    return <main className="main mb-2">
        <header className="bg-mediumblue w-full flex justify-center items-center p-6 mb-4">
            <h1 className="font-chewy text-4xl font-bold text-white">MylittleCal</h1>
        </header>
        <div className="flex justify-center w-full p-6 mt-4">
            <h2 className="font-happymonkey text-3xl font-bold text-darkblue mb-2 text-center">Crea tu perfil</h2>
        </div>

        <form className="form" onSubmit={handleFormSubmit}>
            <label className="label" htmlFor="name">Nombre</label>
            <input className="input" type="text" id="name" />

            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="email" id="email" />

            <label className="label" htmlFor="password">Contraseña</label>
            <input className="input" type="password" id="password" />


            <div className="flex flex-col items-center w-full">
                <button className="bg-mediumblue text-white text-xl font-montserrat bold py-3 px-8 rounded-full shadow-md mb-4 mt-8 " type="submit ">Regístrate</button>
                <a className=" text-darkblue  text-lg font-montserrat font-extrabold underline cursor-pointer " href="" onClick={handleLoginLinkClick} >Inicia Sesión</a>
            </div>


        </form>

    </main>
}

export default Register