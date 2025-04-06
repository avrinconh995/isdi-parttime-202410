import { useState, useEffect } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { FaRegEdit } from "react-icons/fa"

import logic from '../../logic'
import { useCalendarContext } from '../../context'


function EventList({ year, month, day, onEventDeleted, onEditEvent }) {
    // console.log('EventList -> render')

    const { alert, confirm } = useCalendarContext()

    const [dayEvents, setDayEvents] = useState([])
    const [detailsEvent, setDetailsEvent] = useState(null)

    useEffect(() => {
        if (day === null || day === undefined) return; // Evita ejecutar con un día inválido
        // console.log('day events', year, month, day)

        loadDayEvents(year, month, day);
    }, [year, month, day])


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
        confirm('¿Seguro que quieres eliminar este evento?', accepted => {
            if (accepted)
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
        })

    }

    const handleEditButtonClick = (eventId) => {
        onEditEvent(eventId)
    }

    return <section>

        {/* Mostrar los eventos del día seleccionado  */}
        <div className="font-montserrat max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg">
            {day ? (
                <>
                    <h3 className="text-lg  text-center  text-darkblue mb-4 font-bold">Eventos del día</h3>

                    {dayEvents.length === 0 ? (
                        <p className="text-lg text-center  text-darkblue">No hay eventos</p>
                    ) : (
                        <ul>
                            {dayEvents.map((event, index) => (

                                <li
                                    key={index}
                                    className="relative flex items-center justify-between text-sm text-darkblue p-3 rounded-lg shadow-sm mb-2 bg-white hover:bg-blue-50 transition-all duration-200">

                                    <div className="flex items-start justify-between w-full gap-2 ">
                                        <span className="font-semibold text-left  cursor-pointer hover:underline break-words flex-1"
                                            onMouseEnter={() => setDetailsEvent(event)}
                                            onMouseLeave={() => setDetailsEvent(null)}
                                        >
                                            {event.title}
                                        </span>

                                        <div className="flex flex-col items-end gap-1">
                                            <span className="text-sm text-darkblue font-normal  max-w-full capitalize break-words text-right">
                                                {event.children.join(', ')}
                                            </span>


                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-darkblue font-normal whitespace-nowrap">
                                                    {event.date.toLocaleTimeString().slice(0, 5)}
                                                </span>

                                                <button
                                                    className="text-darkblue hover:text-darkblue"
                                                    type="button"
                                                    onClick={() => handleEditButtonClick(event.id)}
                                                >
                                                    <FaRegEdit />
                                                </button>

                                                <button
                                                    className="text-darkblue hover:text-darkblue"
                                                    type="button"
                                                    onClick={() => handleDeleteButtonClick(event.id)}
                                                >
                                                    <MdDeleteForever />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tooltip solo cuando el mouse está sobre el título */}
                                    {detailsEvent?.id === event.id && (
                                        <div className="absolute left-0 top-full mt-1 p-2 bg-white border rounded-lg shadow-lg w-64 z-10 font-montserrat text-darkblue text-sm">

                                            <p className="font-bold "> {event.title}</p>

                                            <p className="font-normal "> {event.description}</p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <p className="text-center text-darkblue font-montserrat font-bold text-m ">
                    Selecciona un día para ver los eventos
                </p>
            )}
        </div>

    </section>

}
export default EventList