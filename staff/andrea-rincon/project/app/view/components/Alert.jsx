function Alert({ message, onAccept }) {
    return <div className="fixed top-0 left-0 w-full h-full bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50" >
        <div className="bg-darkblue text-white font-happymonkey rounded-2xl shadow-lg px-6 py-8 w-80 max-w-md text-center space-y-6 border-4 border-lightblue flex flex-col justify-center items-center" >
            <p className="text-lg sm:text-2xl leading-snug text-wrap ">{message}</p>

            <button className="flex-1 bg-mediumblue text-white text-base sm:text-lg font-montserrat font-bold py-3 px-4 rounded-full shadow-md hover:brightness-110 transition-all duration-200" type="button" onClick={onAccept} >Aceptar</button>
        </div>
    </div>
}

export default Alert