import './Home.css'

import { useState, useEffect } from 'react'

import logic from '../logic'

import Posts from './components/Posts'
import CreatePost from './components/CreatePost'


function Home(props) {
    //this.state = { name: null, view: 'posts' }
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



    const handleLogoutButtonClick = () => {
        try {
            logic.logoutUser()

            props.onUserLoggedOut()
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

    return <div className="Home">
        <header className="Home-header">
            <h2 className="Home-title" onClick={handleHomeClick}></h2>

            <h1 className="Home-name"> {name}</h1>

            <button className="Logout-Button" type="button" onClick={handleLogoutButtonClick}>Logout</button>
        </header>
        <div className="Home-content">
            {view === 'posts' && <Posts />}
            {view === 'create-post' && <CreatePost onPostCreated={handlePostCreated} onCancel={handleCancelCreatePost} />}
        </div>

        <footer className="Home-footer">
            {view !== 'create-post' && <button type="button" onClick={handleCreatePostButtonClick}>+</button>}
        </footer>
    </div>

}

export default Home