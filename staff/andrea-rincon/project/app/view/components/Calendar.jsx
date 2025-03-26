import { useState, useEffect } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

import logic from '../../logic'


const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
}

const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

function Calendar() {
    console.log('Calendar -> render')

    const [currentDate, setCurrentDate] = useState(new Date())
    const [daysWithEvents, setDaysWithEvents] = useState([])
    const [selectedDay, setSelectedDay] = useState(null)
    const [dayEvents, setDayEvents] = useState([])


    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const daysInMonth = getDaysInMonth(year, month)

    const firstDay = new Date(year, month, 1).getDay()
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1

    const nextMonth = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
            if (newDate.getMonth() === prevDate.getMonth()) return prevDate
            console.log('Nuevo mes:', newDate)
            return newDate
        })
        setSelectedDay(null)
        setDayEvents([])
    }

    const prevMonth = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
            if (newDate.getMonth() === prevDate.getMonth()) return prevDate;
            console.log('Mes anterior:', newDate)
            return newDate
        })
        setSelectedDay(null)
        setDayEvents([])
    }


    useEffect(() => {
        console.log('dayswithevents', year, month)

        loadDaysWithEvents(year, month)
    }, [year, month])

    const loadDaysWithEvents = (year, month) => {
        setDaysWithEvents([])

        try {
            logic.getDaysOfMonthsWithEvents(year, month + 1)
                .then((days) => {
                    setDaysWithEvents(days)
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

    const loadDayEvents = (year, month, day) => {
        setDayEvents([])

        try {
            logic.getEventsFromDay(year, month + 1, day)
                .then((events) => {
                    setDayEvents(events)
                })
                .catch(error => {
                    alert(error.message)
                    cfccf
                    console.error(error)
                })
        } catch (error) {
            alert(error.message)

            console.error(error)

        }

    }


    const handleSelectDay = (day) => {
        setSelectedDay(day)
        console.log('dia seleccionado', day)
        loadDayEvents(year, month, day)
    }

    return (
        <main className="space-y-6">
            <div className="font-montserrat max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg">
                <h2 className="text-xl font-bold mx-4 text-center capitalize font-montserrat">
                    {currentDate.toLocaleString("es-ES", { month: "long" })} {year}
                </h2>

                <div className="flex items-center justify-center mb-4">
                    {/* botones flechas */}
                    <button className="p-2 rounded-full hover:bg-gray-200" onClick={prevMonth}><FaArrowAltCircleLeft /></button>
                    <button className="p-2 rounded-full hover:bg-gray-200" onClick={nextMonth}><FaArrowAltCircleRight /></button>
                </div>


                {/* encabezado calendario con el nombre del mes */}
                <div className="grid grid-cols-7 text-center font-semibold text-darkblue font-montserrat">
                    {daysOfWeek.map((day) => (
                        <div key={day} className="text-darkblue font-montserrat p-2">{day}</div>
                    ))}
                </div>

                {/* espacio para los dias anteriores */}
                <div className="grid grid-cols-7 gap-1 font-montserrat">
                    {Array(adjustedFirstDay === 0 ? 6 : firstDay - 1).fill(null).map((_, index) => (<div key={index} className="p-2"></div>))}


                    {/* dias del mes*/}
                    {Array.from({ length: daysInMonth }, (_, index) => {
                        const day = index + 1

                        const isToday =

                            day === new Date().getDate() &&
                            month === new Date().getMonth() &&
                            year === new Date().getFullYear()

                        const dayHasEvent = daysWithEvents.includes(day)// dia con evneto
                        const isSelected = selectedDay === day


                        return (
                            <div key={day}
                                onClick={() => handleSelectDay(day)} className={`p-2 text-center rounded-md ${isToday ? (dayHasEvent ? "bg-purpubold font-montserrat text-white font-bold" : "bg-darkblue font-montserrat text-white font-bold") : (dayHasEvent ? "bg-purpu font-montserrat text-white font-bold" : "hover:bg-gray-200")
                                    } ${isSelected ? "border-2 border-darkblue" : ""} `}
                            >
                                {day}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Monstrar los eventos del dia seleccionado*/}
            <section>
                <div className="font-montserrat max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg space-y-[40px]">
                    {selectedDay ? (
                        <>
                            <h3 className="text-lg font-bold mx-4 text-center capitalize font-montserrat text-darkblue">Eventos  </h3>

                            {dayEvents.length === 0 ? (
                                <p className="text-lg  mx-4 text-center capitalize font-montserrat text-darkblue">No hay eventos</p>
                            ) : (
                                <ul >
                                    {dayEvents.map((event, index) => (
                                        <li key={index} className="text-sm font-montserrat text-darkblue"> - {event.title || event}</li>
                                    ))}
                                </ul>
                            )}
                        </>
                    ) : (
                        <p className="text-center text-darkblue font-montserrat">
                            Selecciona un día para ver los eventos
                        </p>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Calendar