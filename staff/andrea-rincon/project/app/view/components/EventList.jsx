import { useState, useEffect } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { FaRegEdit } from "react-icons/fa"

import logic from '../../logic'


function EventList({ year, month, day, onEventDeleted, onEditEvent }) {
    console.log('EventList -> render')

    const [dayEvents, setDayEvents] = useState([])
    const [detailsEvent, setDetailsEvent] = useState(null)

    useEffect(() => {
        if (day === null || day === undefined) return; // Evita ejecutar con un día inválido
        console.log('day events', year, month, day);

        loadDayEvents(year, month, day);
    }, [year, month, day]);


    const loadDayEvents = (year, month, day) => {
        setDayEvents([])

        try {
            logic.getEventsFromDay(year, month, day)
                .then((events) => {
                    setDayEvents(events)
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

    const handleDeleteButtonClick = (eventid) => {
        if (window.confirm('¿Eliminar este evento?'))
            try {
                logic.deleteEvent(eventid)
                    .then(() => {
                        onEventDeleted()
                        loadDayEvents(year, month, day)
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

    const handleEditButtonClick = (eventId) => {
        onEditEvent(eventId)
    }



    return <section>

        {/* Mostrar los eventos del día seleccionado */}
        <div className="font-montserrat max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg">
            {day ? (
                <>
                    <h3 className="text-lg  text-center capitalize text-darkblue mb-4 font-bold">Eventos</h3>

                    {dayEvents.length === 0 ? (
                        <p className="text-lg text-center capitalize text-darkblue">No hay eventos</p>
                    ) : (
                        <ul>
                            {dayEvents.map((event, index) => (

                                <li
                                    key={index}
                                    className="relative flex items-center justify-between text-sm text-darkblue p-2 rounded-lg shadow-sm mb-2"
                                    onMouseEnter={() => setDetailsEvent(event)}
                                    onMouseLeave={() => setDetailsEvent(null)}
                                >

                                    {/* Nombre del evento y Niñas (children) */}
                                    <div className="flex flex-1 items-center space-x-4 justify-between text-center gap-4">
                                        <span className="font-semibold mr-4 text-center justify-start">{event.title}</span>
                                        <div className="flex flex-1 items-center justify-between">
                                            <span className="text-xs text-darkblue mr-2 font-normal">{event.children.join(', ')}</span>
                                        </div>
                                    </div>

                                    {/* Hora centrada */}
                                    <span className="text-xs text-darkblue ml-auto mr-4 text-left font-normal justify-between">{event.date.toLocaleTimeString().slice(0, 5)}</span>

                                    {/* Botón de eliminar alineado a la derecha */}
                                    <button
                                        className="text-darkblue text-xl ml-4 font-bold"
                                        type="button"
                                        onClick={() => handleEditButtonClick(event.id)}
                                    >
                                        <FaRegEdit />
                                    </button>
                                    <button
                                        className="text-darkblue text-xl ml-4 font-normal"
                                        type="button"
                                        onClick={() => handleDeleteButtonClick(event.id)}
                                    >
                                        <MdDeleteForever />
                                    </button>

                                    {detailsEvent?.id === event.id && (
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border rounded-lg shadow-lg w-48 z-10">
                                            <p className="font-semibold">{event.title}</p>
                                            <p className="text-xs text-darkblue">{event.details}</p>
                                            <p className="text-xs text-darkblue">{event.description}</p>
                                        </div>
                                    )}


                                </li>
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

}
export default EventList