import './Register.css'

import logic from '../logic'

function Register(props) {
    console.log('Register -> render')

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            logic.registerUser(name, email, username, password)
                .then(() => {
                    form.reset()

                    props.onUserRegistered()
                })
                .catch(error => {
                    alert(error.message)

                    console.error(error)
                })
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    const handleLoginLinkClick = event => {
        event.preventDefault()

        props.onLoginClicked()
    }

    return <main className="Register-Content">
        <h2 className="Register-title">Register</h2>

        <form onSubmit={handleFormSubmit} className="Register-form" >

            <label htmlFor="name">Name</label>
            <input type="text" id="name" />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />

            <label htmlFor="username">Username</label>
            <input type="text" id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <div className="Register-button-container">
                <button type="submit">Register</button>
            </div>
        </form>

        <a href="" className="Register-LoginLink" onClick={handleLoginLinkClick}>Login</a>
    </main>
}

export default Register