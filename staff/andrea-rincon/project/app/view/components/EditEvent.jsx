import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import logic from '../../logic'

function EditEvent({ onCancel, onSuccessEditEvent }) {
    console.log('editEvent')

    const { id: eventId } = useParams()
    console.log(eventId)

    const [event, setEvent] = useState(null)


    useEffect(() => {
        console.log(`Editando evento con ID: ${eventId}`);
        loadEvent(eventId);
    }, [eventId]);

    const loadEvent = (eventId) => {
        if (!eventId) {
            return;
        }
        try {
            logic.getEvent(eventId)
                .then(event => setEvent(event))
                .catch(error => {
                    alert(error.message)

                    console.log(error)
                })
        } catch (error) {
            alert(error.message)

            console.error(error)

        }
    }

    const handleEditFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const title = form.title.value.trim()
        const children = form.children?.value ? form.children.value.split(' ') : [];
        const date = form.date.value ? new Date(form.date.value) : null;
        const description = form.description.value.trim() || undefined

        console.log('event', eventId)

        logic.updateEvent(eventId, title, children, date, description)
            .then(() => {
                setEvent(prevEvent => ({
                    ...prevEvent,
                    title,
                    children,
                    date,
                    description
                }))

                form.reset()

                onSuccessEditEvent()
            })
            .catch(error => {
                alert(error.message)
                console.error(error)
            })

    }
    const handleCancelEditButtonClick = (event) => {
        event.preventDefault()
        onCancel()
    }


    return <main className="main mb-2">

        <div className="flex justify-center w-full p-6 mt-8">
            <h2 className="font-happymonkey text-3xl font-bold text-darkblue mb-2 text-center">Editar Evento</h2>
        </div>


        <form className="form " onSubmit={handleEditFormSubmit}>
            <label className="label" htmlFor="title">Titulo</label>
            <input className="input mt-2" type="text" id="title" defaultValue={event?.title || ''} />

            <label className="label" htmlFor="children">Hij@(s)</label>
            <input className="input mt-2" type="text" id="children"
                defaultValue={event?.children?.map(child => child.name).join(' ') || ''} />

            <label className="label" htmlFor="date">Fecha y Hora  </label>
            <input className="input mt-2" type="datetime-local" id="date" defaultValue={event?.date ? new Date(event.date).toISOString().slice(0, 16) : ''} />

            <label className="label" htmlFor="description">Nota</label>
            <input className="input mt-2" type="text" id="description" defaultValue={event?.description || ''} />


            <div className="w-full mt-8 flex flex-row justify-between gap-2">
                <div className="flex justify-between items-center"> {/* Contenedor de botones */}
                    <button
                        className="flex-1 bg-redmedium text-white text-xl font-montserrat bold py-3 px-8 rounded-full shadow-md mx-2"
                        onClick={handleCancelEditButtonClick}
                        type="button"
                    >
                        Cancelar
                    </button>
                    <button
                        className="flex-1 bg-mediumblue text-white text-xl font-montserrat bold py-3 px-8 rounded-full shadow-md mx-2"
                        type="submit"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </form>

    </main>


}

export default EditEvent