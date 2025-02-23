function Landing({ onRegisterClicked, onLoginClicked }) {
    console.log('Landing -> render')

    const handleRegisterLinkClick = event => {
        event.preventDefault()

        onRegisterClicked()
    }

    const handleLoginLinkClick = event => {
        event.preventDefault()

        onLoginClicked()
    }

    return <div className="flex justify-center items-center h-screen">
        <h2>Welcome!</h2>

        <div >
            <p><a href="" onClick={handleRegisterLinkClick}>Register</a> or <a href="" onClick={handleLoginLinkClick}>Login</a></p>
        </div>
    </div>

}
export default Landing
