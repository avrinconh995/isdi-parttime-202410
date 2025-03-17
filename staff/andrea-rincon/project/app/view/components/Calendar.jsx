import { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"



const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
}

const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

function Calendar() {
    console.log('Calendar -> render')

    const [currentDate, setCurrentDate] = useState(new Date())

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const daysInMonth = getDaysInMonth(year, month)

    const firstDay = new Date(year, month, 1).getDay()
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1

    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1))
    const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1))

    return <main>
        <div className="font-roboto max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mx-4 text-center capitalize" > {currentDate.toLocaleString("es-ES", { month: "long" })} {year}
            </h2>

            <div className="flex items-center justify-center mb-4">
                {/* botones flechas */}
                <button className="p-2 rounded-full hover:bg-gray-200" onClick={prevMonth}><FaArrowAltCircleLeft /></button>
                <button className="p-2 rounded-full hover:bg-gray-200" onClick={nextMonth}><FaArrowAltCircleRight /></button>
            </div>


            {/* encabezado calendario con el nombre del mes */}
            <div className="grid grid-cols-7 text-center font-semibold text-black">
                {daysOfWeek.map((day) => (
                    <div key={day} className="text-black font-roboto p-2">{day}</div>
                ))}
            </div>

            {/* espacio para los dias anteriores */}
            <div className="grid grid-cols-7 gap-1">
                {Array(adjustedFirstDay === 0 ? 6 : firstDay - 1).fill(null).map((_, index) => (<div key={index} className="p-2"></div>))}

                {Array.from({ length: daysInMonth }, (_, index) => {
                    const day = index + 1

                    const isToday =

                        day === new Date().getDate() &&
                        month === new Date().getMonth() &&
                        year === new Date().getFullYear()

                    return (
                        <div key={day} className={`p-2 text-center rounded-md ${isToday ? "bg-darkblue text-white font-bold" : "hover:bg-gray-200"
                            }`}>

                            {day}
                        </div>

                    )
                })}
            </div>
        </div>
    </main>
}

export default Calendar