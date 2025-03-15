import { useState, useEffect } from 'react'

import logic from '../logic/'

import { Routes, Route, useNavigate } from 'react-router-dom'


function Home(onUserLoggedOut) {
    console.log('Register -> render')

    const [name, setName] = useState(null)

    useEffect(() => {
        console.log('Home-> NAME')

        try {
            logic.getUserName()
                .then(name => setName(name))
                .catch(error => {
                    alert(error.message)

                    console.error()
                })
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    })

    const handleLogoutButtonClick = () => {
        try {
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    return <div className="main mt-6">
        <header>
            <h2 className="font-montserrat text-3xl font-bold text-black mb-8 text-center">Calendar</h2>

            <h3 className="font-montserrat text-2xl font-bold text-black mb-8 text-center">Hola, {name}</h3>

            <button className="button" type="button" onClick={handleLogoutButtonClick}>Cerrar Sesión</button>
        </header>
    </div>
}

export default Home