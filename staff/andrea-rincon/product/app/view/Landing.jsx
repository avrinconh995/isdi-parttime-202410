import './Landing.css'

function Landing(props) {
    console.log('Landing -> render')

    const handleRegisterLinkClick = event => {
        event.preventDefault()

        props.onRegisterClicked()
    }

    const handleLoginLinkClick = event => {
        event.preventDefault()

        props.onLoginClicked()
    }

    return <div className="Landing">
        <h2>Welcome!</h2>

        <div className="Landing-click">
            <p><a href="" onClick={handleRegisterLinkClick}>Register</a> or <a href="" onClick={handleLoginLinkClick}>Login</a></p>
        </div>
    </div>

}
export default Landing
