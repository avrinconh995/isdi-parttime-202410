import { useState, useEffect } from 'react'

import logic from '../logic/'

import { Routes, Route, useNavigate } from 'react-router-dom'

import Calendar from './components/Calendar'
import CreateEvent from './components/CreateEvent'


function Home({ onUserLoggedOut }) {
    console.log('Register -> render')

    const navigate = useNavigate()

    const [view, setView] = useState('calendar')


    useEffect(() => {
        switch (view) {
            case 'calendar':
                navigate('/')
                break
            case 'create-event':
                navigate('/create-event')
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


    const handleEventCreated = () => setView('calendar')

    const handleCreateEventButtonClick = () => setView('create-event')

    const handleCancelCreateEvent = () => setView('calendar')

    console.log('Home -> render')

    return <section className="main mb2">
        <header className="bg-mediumblue w-full flex justify-center items-end p-6 mb-4">
            <h1 className="font-chewy text-4xl font-bold text-white">MylittleCal</h1>
        </header>

        <main>
            <Routes>
                <Route
                    path="/"
                    element={<Calendar />}
                />

                <Route
                    path="/create-event"
                    element={<CreateEvent
                        onEventCreated={handleEventCreated}
                        onCancel={handleCancelCreateEvent} />}
                />

            </Routes>

        </main>
        {/* 
        <section className="flex justify-center mb-6">
            <Calendar />
        </section> */}

        <div className="flex flex-col items-end w-full mt-0">
            {view === 'calendar' && <button
                className="bg-mediumblue text-white text-xl font-montserrat font-bold py-3 px-8 rounded-full shadow-md mb-4"
                type="button"
                onClick={handleLogoutButtonClick}
            >
                Salir
            </button>}
        </div>



        <footer>
            {view === 'calendar' && <button className="bg-mediumblue text-white text-xl font-montserrat font-bold py-3 px-8 rounded-full shadow-md mb-4" type="button" onClick={handleCreateEventButtonClick}>+</button>}
        </footer>


    </section >
}

export default Home