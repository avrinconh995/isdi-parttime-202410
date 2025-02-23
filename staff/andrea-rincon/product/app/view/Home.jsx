
import { useState, useEffect } from 'react'

import logic from '../logic'

import Posts from './components/Posts'
import CreatePost from './components/CreatePost'

import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'


function Home({ onUserLoggedOut }) {
    //this.state = { name: null, view: 'posts' }
    const navigate = useNavigate()

    const [view, setView] = useState('posts')
    const [name, setName] = useState('null')

    useEffect(() => {
        console.log('Home -> "componentDidMount" (useEffect)')

        try {
            logic.getUserName()
                .then(name => setName(name))
                .catch(error => {
                    alert(error.message)

                    console.error(error)
                })

        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }, [])

    useEffect(() => {
        switch (view) {
            case 'posts':
                navigate('/')
                break
            case 'create-post':
                navigate('/create-post')
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

    const handlePostCreated = () => setView('posts')

    const handleCreatePostButtonClick = () => setView('create-post')

    const handleCancelCreatePost = () => setView('posts')

    const handleHomeClick = () => setView('posts')

    console.log('Home -> render')

    return <div className="mx-2">
        <header className="flex items-start justify-between text-[20px] relative top-2 left-2">
            <h2 className="m-0" onClick={handleHomeClick}></h2>

            <h1 className="text-[20px] "> {name}</h1>


            <button className="button" type="button" onClick={handleLogoutButtonClick}>Logout</button>

        </header>
        <div className="mb-9">
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/create-post" element={<CreatePost onPostCreated={handlePostCreated} onCancel={handleCancelCreatePost} />} />
            </Routes>
        </div>

        <footer className="flex items-center justify-center h-6 fixed bottom-0 w-full ">
            {view !== 'create-post' && <button type="button" onClick={handleCreatePostButtonClick}>+</button>}
        </footer>
    </div>

}

export default Home