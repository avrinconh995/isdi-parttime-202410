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

            <h1 className="font-chewy text-7xl font-bold text-darkblue mb-15 text-center ">MyLittleCal</h1>
            <div><p className="font-happymonkey text-lg text-mediumblue font-bold mb- text-center mb-4">¡Bienvenido a mi calendario!</p></div>


            <div className="flex justify-center w-full mt-10">
                <button className="bg-mediumblue text-white text-xl font-montserrat bold py-3 px-8 rounded-full shadow-md mb-8">
                    <a href="" onClick={handleLoginClick}>Inicia Sesión</a>
                </button>
            </div>

            <div className="flex flex-col items-center w-full p-3 text-center">
                <p className="text-montserrat text-base text-darkblue">
                    ¿No tienes una cuenta?,<br></br>
                    <button className=" text-darkblue  text-lg font-montserrat font-extrabold underline ml-1 items-center" onClick={handleRegisterLinkClick}
                    >Regístrate</button>
                </p>
            </div>

        </main>
    )
}

export default Landing