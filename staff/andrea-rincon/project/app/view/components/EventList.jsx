import { useState, useEffect } from 'react'

import logic from '../../logic'


function EventList({ year, month, day }) {
    console.log('EventList -> render')

    const [dayEvents, setDayEvents] = useState([])
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


    return <section>

        {/* Monstrar los eventos del dia seleccionado*/}
        <div className="font-montserrat max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg space-y-[40px]">
            {day ? (
                <>
                    <h3 className="text-lg font-bold mx-4 text-center capitalize font-montserrat text-darkblue">Eventos  </h3>

                    {dayEvents.length === 0 ? (
                        <p className="text-lg  mx-4 text-center capitalize font-montserrat text-darkblue">No hay eventos</p>
                    ) : (
                        <ul >
                            {dayEvents.map((event, index) => (
                                <li key={index} className="text-sm font-montserrat text-darkblue"> - {event.title} ({event.children.join(', ')}) - {event.date.toLocaleTimeString().slice(0, 5)}</li>
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