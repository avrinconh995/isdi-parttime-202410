import { useEffect, useState } from 'react'

import Landing from './view/Landing'
import Register from './view/Register'
import Login from './view/Login'
import Home from './view/Home'

import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'



function App() {

    const navigate = useNavigate()
    const location = useLocation()

    let viewInPath = location.pathname.slice(1)
    if (viewInPath !== 'landing' && viewInPath !== 'register' && viewInPath !== 'login')
        viewInPath = 'landing'

    const [view, setView] = useState('home')


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

    console.log('APP => render')

    return <>
        {/* <h1>HOLA APP!</h1> */}

        <Routes>
            <Route path="/landing" element={
                <Landing onLoginClicked={handleLoginClick} onRegisterClicked={handleRegisterClick} />
            } />

            <Route path="/register" element={
                <Register onLoginClicked={handleLoginClick} onUserRegistered={handleUserRegistered} />
            } />

            <Route path="/login" element={
                <Login onRegisterClicked={handleRegisterClick} onUserLoggedIn={handleUserLoggedIn} />
            } />

            <Route path="/*" element={
                <Home onUserLoggedOut={handleUserLoggedOut} />
            } />
        </Routes>

    </>
}

export default App