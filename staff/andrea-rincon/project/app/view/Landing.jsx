function Landing({ onLoginClicked, onRegisterClicked }) {
    console.log('Landing -> render')

    const handleLoginClick = (event) => {
        event.preventDefault()
        onLoginClicked()
    };

    const handleRegisterLinkClick = (event) => {
        event.preventDefault()
        onRegisterClicked()
    };

    return (
        <main className="main justify-center" >
            <div className="flex flex-col items-center w-full max-w-md">
                <h2 className="font-montserrat text-4xl font-bold text-black mb-8 text-center">¡Bienvenido!</h2>
                <p className="font-inter text-lg text-black mb- text-center">A mi calendario</p>

                <div className="flex justify-center w-full mt-10">
                    <button className="bg-darkblue text-white text-xl font-montserrat bold py-3 px-8 rounded-full shadow-md mb-8">
                        <a href="" onClick={handleLoginClick}>Inicia Sesión</a>
                    </button>
                </div>

                <div className="flex justify-start w-full p-3">
                    <p className="text-roboto text-base text-black">
                        ¿No tienes una cuenta?,
                        <button className=" text-darkblue  text-lg font-montserrat font-extrabold underline ml-1" onClick={handleRegisterLinkClick}
                        >Regístrate</button>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Landing