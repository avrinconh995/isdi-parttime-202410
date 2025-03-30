import { useState, useEffect } from 'react'

import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import Calendar from './components/Calendar'
import CreateEvent from './components/CreateEvent'
import Header from './common/Header'
import EditEvent from './components/EditEvent'


import { FaPlus } from "react-icons/fa";



function Home({ onUserLoggedOut }) {
    console.log(' home-> render')

    const navigate = useNavigate()
    const location = useLocation()

    let viewInPath = location.pathname.slice(1)

    if (viewInPath !== 'create-event')
        viewInPath = 'calendar'

    const [view, setView] = useState(viewInPath)



    useEffect(() => {
        switch (view) {
            case 'calendar':
                navigate('/')
                break
            case 'create-event':
                navigate('/create-event')
                break
            case 'edit-event':
                break
        }
    }, [view])

    const handleEventCreated = () => setView('calendar')

    const handleCreateEventButtonClick = () => setView('create-event')

    const handleCancelCreateEvent = () => setView('calendar')

    const handleLogoutButtonClick = () => onUserLoggedOut()


    console.log('Home -> render')

    return <section className="main mb2">
        <Header onUserLoggedOut={handleLogoutButtonClick} />
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

                <Route path="/edit-event"
                    element={<EditEvent />}
                />
            </Routes>

        </main>

        <footer className="flex justify-center items-center py-4">
            {location.pathname === '/' && (
                <button
                    type="button"
                    onClick={handleCreateEventButtonClick}
                    className="bg-mediumblue rounded-full p-4 shadow-lg"
                >
                    <FaPlus className="text-white text-xl" />
                </button>
            )}
        </footer>
    </section >
}

export default Home