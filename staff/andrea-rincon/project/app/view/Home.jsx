import { useState, useEffect } from 'react'

import logic from '../logic/'

import { Routes, Route, useNavigate } from 'react-router-dom'

import Calendar from './components/Calendar'


function Home({ onUserLoggedOut }) {
    console.log('Register -> render')

    const navigate = useNavigate()

    const [view, setView] = useState('calendar')
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

    useEffect(() => {
        switch (view) {
            case 'calendar':
                navigate('/')
                break
        }
    }, [view])

    const handleLogoutButtonClick = () => {
        try {
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    return <main className="main mt-6 mp-2 flex justify-center">
        <div className="container mx-auto px-4 ">
            <header className="text-left mb-8 flex justify-left justify-between">
                <h1 className="font-montserrat text-3xl font-bold text-black  text-center">Calendario</h1>
            </header>
            <section className="flex justify-left w-full  p-2">
                <h2 className="font-roboto text-2xl font-regular text-black mb-8 text-center flex justify-left">Hola, {name}</h2>
            </section>

            <section className="flex justify-center mb-6">
                <Calendar />
            </section>

            <div className="flex justify-right  p-3">
                <button className="bg-darkblue text-white text-xl font-montserrat bold py-2 px-6 rounded-full shadow-md mb-8" type="button" onClick={handleLogoutButtonClick}>Salir</button>
            </div>

        </div>
    </main>
}

export default Home