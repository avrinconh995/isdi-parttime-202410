import { useState, useEffect } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

import logic from '../../logic'
import EventList from './EventList'
import EditEvent from './EditEvent'




const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
}

const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

function Calendar({ onEditEvent }) {
    console.log('Calendar -> render')

    const [name, setName] = useState(null)
    const [currentDate, setCurrentDate] = useState(new Date())
    const [daysWithEvents, setDaysWithEvents] = useState([])
    const [selectedDay, setSelectedDay] = useState(null)
    const [showYearSelector, setShowYearSelector] = useState(false)

    useEffect(() => {
        console.log('Home-> NAME')

        try {
            logic.getUserName()
                .then(name => setName(name))
                .catch(error => {
                    alert(error.message)

                    console.error()
                })
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }, [])

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const day = currentDate.getDate()

    const daysInMonth = getDaysInMonth(year, month)

    const firstDay = new Date(year, month, 1).getDay()
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1



    const nextMonth = () => {
        setCurrentDate((prevDate) => {
            let newYear = prevDate.getFullYear()
            let newMonth = prevDate.getMonth() + 1
            if (newMonth > 11) {
                newYear++
                newMonth = 0
            }
            const newDate = new Date(newYear, newMonth, 1);
            // if (newDate.getMonth() === prevDate.getMonth()) return prevDate;
            console.log('Mes anterior:', newDate)
            return newDate
        })
    }

    const prevMonth = () => {
        setCurrentDate((prevDate) => {
            let newYear = prevDate.getFullYear()
            let newMonth = prevDate.getMonth() - 1
            if (newMonth < 0) {
                newYear--
                newMonth = 11
            }
            const newDate = new Date(newYear, newMonth, 1);
            // if (newDate.getMonth() === prevDate.getMonth()) return prevDate;
            console.log('Mes anterior:', newDate)
            return newDate
        })
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

    const handleSelectDay = (day) => {
        setSelectedDay(day)
        console.log('dia seleccionado', day)

    }

    useEffect(() => {
        setSelectedDay(null) // Al cambiar de mes, ningún día queda seleccionado
    }, [year, month])

    const toggleYearSelector = () => setShowYearSelector(!showYearSelector)

    const handleYearSelect = (selectedYear) => {
        setCurrentDate(new Date(selectedYear, month, 1))
        setShowYearSelector(false)
    }

    const handleEventDeleted = () => {
        loadDaysWithEvents(year, month)

    }

    const handleEditEvent = (eventId) => {
        onEditEvent(eventId)
    }


    return <section>
        <div className="flex flex-col justify-left w-full p-2 mt-6">
            <h2 className="font-happymonkey text-3xl font-bold text-darkblue mb-2 mx-2">
                Hola, {name}
            </h2>
            <h2 className="font-familjen text-2xl font-bold text-darkblue mb-2 mx-2 ">
                Calendario
            </h2>
        </div>

        <div className="font-montserrat max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg text-darkblue">
            <div className="relative text-center flex items-center justify-center">
                {/* Mostrar el mes y el año juntos */}
                <h2 className="text-xl font-bold mx-2 capitalize font-montserrat">
                    {currentDate.toLocaleString('es-ES', { month: 'long' })}
                </h2>

                {/* Año clickable */}
                <h2
                    className="text-xl font-bold mx-2 capitalize font-montserrat cursor-pointer"
                    onClick={toggleYearSelector}
                >
                    {year}
                </h2>
                {/* Selector de año desplegable */}
                {showYearSelector && (
                    <div className="absolute bg-white border rounded shadow-md max-h-60 overflow-y-auto w-32 left-1/2 transform -translate-x-1/2 z-10">
                        {[...Array(20)].map((_, i) => {
                            const yearOption = year - 10 + i;
                            return (
                                <div
                                    key={yearOption}
                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleYearSelect(yearOption)}
                                >
                                    {yearOption}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* botones flechas */}
            <div className="flex items-center justify-center mt-2">
                <button className="p-2 rounded-full hover:bg-gray-200" onClick={prevMonth}>
                    <FaArrowAltCircleLeft />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-200" onClick={nextMonth}>
                    <FaArrowAltCircleRight />
                </button>
            </div>


            {/* encabezado calendario con el nombre del mes */}
            <div className="grid grid-cols-7 text-center font-semibold text-darkblue font-montserrat">
                {daysOfWeek.map((day) => (
                    <div key={day} className="text-darkblue font-montserrat p-2">{day}</div>
                ))}
            </div>

            {/* espacio para los dias anteriores */}
            <div className="grid grid-cols-7 gap-1 font-montserrat">
                {Array(adjustedFirstDay === 0 ? 6 : firstDay).fill(null).map((_, index) => (<div key={index} className="p-2"></div>))}

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
        <main className="space-y-6 mt-6">
            <EventList year={year} month={month + 1} day={selectedDay} onEventDeleted={handleEventDeleted} onEditEvent={handleEditEvent} />


        </main>
    </section >
}

export default Calendar