
import logic from '../../logic'

import { errors } from 'com'
const { NotFoundError, SystemError } = errors

import { IoMenu } from "react-icons/io5"
import { IoMdExit } from "react-icons/io";


function Header({ onUserLoggedOut }) {
    console.log('header -')

    const handleLogoutButtonClick = () => {
        try {
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }


    return <div className="bg-mediumblue w-full flex items-center justify-between px-6 py-4">
        {/* Menú a la izquierda */}
        <button className="text-white text-3xl" type="button">
            <IoMenu />
        </button>

        {/* Título centrado */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="font-chewy text-4xl font-bold text-white">MylittleCal</h1>
        </div>

        {/* Botón "Salir" con ícono arriba y texto abajo */}
        <div className="flex flex-col items-center mt-2" onClick={handleLogoutButtonClick}>
            <IoMdExit className="text-white text-3xl mb-1" />
            <button
                className="text-white text-[10px] font-happymonkey font-bold"
                type="button"

            >
                Salir
            </button>
        </div>
    </div>
}

export default Header