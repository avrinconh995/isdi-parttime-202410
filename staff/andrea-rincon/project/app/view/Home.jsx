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
                navigate('/calendar')
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

    return <main className="main mb2">
        <header className="bg-mediumblue w-full flex justify-center items-end p-6 mb-4">
            <h1 className="font-chewy text-4xl font-bold text-white">MylittleCal</h1>
        </header>


        <div className="flex flex-col justify-left w-full p-2">
            <h2 className="font-happymonkey text-3xl font-bold text-darkblue mb-2 mx-2">Hola, {name}</h2>
            <h2 className="font-familjen text-2xl font-bold text-darkblue mb-2 mx-2 ">Calendario</h2>
        </div>


        <section className="flex justify-center mb-6">
            <Calendar />
        </section>

        <div className="flex flex-col items-end w-full mt-0">
            <button
                className="bg-mediumblue text-white text-xl font-montserrat font-bold py-3 px-8 rounded-full shadow-md mb-4"
                type="button"
                onClick={handleLogoutButtonClick}
            >
                Salir
            </button>
        </div>


    </main >
}

export default Home