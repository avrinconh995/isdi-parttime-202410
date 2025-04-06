import { useEffect, useState } from 'react'

import logic from './logic'

import Landing from './view/Landing'
import Register from './view/Register'
import Login from './view/Login'
import Home from './view/Home'
import Alert from './view/components/Alert'
import Confirm from './view/components/Confirm'

import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'

import { CalendarContext } from './context'

function App() {

    const navigate = useNavigate()
    const location = useLocation()

    let viewInPath = location.pathname.slice(1)
    if (viewInPath !== 'landing' && viewInPath !== 'register' && viewInPath !== 'login' && viewInPath !== 'create-event')
        viewInPath = 'landing'
    const [view, setView] = useState(viewInPath)

    const [alertMessage, setAlertMessage] = useState('')
    const [confirmMessage, setConfirmMessage] = useState('')
    const [confirmCallback, setConfirmCallback] = useState(null)

    const handleRegisterClick = () => setView('register')
    const handleLoginClick = () => setView('login')
    const handleUserLoggedIn = () => setView('home')
    const handleUserRegistered = () => setView('login')
    const handleUserLoggedOut = () => setView('login')

    useEffect(() => {
        switch (view) {
            case 'landing':
                navigate('/landing')
                break
            case 'register':
                navigate('/register')
                break
            case 'login':
                navigate('/login')
                break
            case 'home':
                navigate('/')
                break
        }
    }, [view])

    const handleAcceptAlert = () => setAlertMessage('')

    const handleAcceptConfirm = () => {
        App.confirmCallback(true)

        setConfirmMessage('')
        App.confirmCallback = null
    }

    const handleOnCancelConfirm = () => {
        App.confirmCallback(false)

        setConfirmMessage('')
        App.confirmCallback = null
    }

    const alert = message => setAlertMessage(message)

    const confirm = (message, callback) => {
        setConfirmMessage(message)

        App.confirmCallback = callback

    }
    // console.log('APP => render')

    return <CalendarContext.Provider value={{ alert, confirm }}>
        {/* <h1>HOLA APP!</h1> */}


        <Routes>
            <Route path="/landing" element={
                logic.isUserLoggedIn() ? <Navigate to="/" /> : <Landing onLoginClicked={handleLoginClick} onRegisterClicked={handleRegisterClick} />
            } />

            <Route path="/register" element={
                logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onLoginClicked={handleLoginClick} onUserRegistered={handleUserRegistered} />
            } />

            <Route path="/login" element={
                logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onRegisterClicked={handleRegisterClick} onUserLoggedIn={handleUserLoggedIn} />
            } />

            <Route path="/*" element={
                <Home onUserLoggedOut={handleUserLoggedOut} />
            } />
        </Routes>

        {alertMessage && <Alert message={alertMessage} onAccept={handleAcceptAlert} />}

        {confirmMessage && <Confirm message={confirmMessage} onAccept={handleAcceptConfirm} onCancel={handleOnCancelConfirm} />}


    </CalendarContext.Provider>
}

export default App