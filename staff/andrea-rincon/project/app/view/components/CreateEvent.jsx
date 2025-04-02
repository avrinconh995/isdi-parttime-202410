import logic from '../../logic'

function CreateEvent({ onEventCreated, onCancel }) {

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const children = form.children.value.split(' ')
        const title = form.title.value
        const date = new Date(form.date.value)
        const description = form.description.value

        try {
            logic.createEvent(children, title, date, description)
                .then(() => onEventCreated(date))
                .catch(error => {
                    alert(error.message)

                    console.error(error)
                })

        } catch (error) {
            alert(error.message)

            console.error(error)
        }

    }

    const handleCancelButtonClick = () => onCancel()

    console.log('CreateEvent -> render')

    return <main className="main mb-2">

        <div className="flex justify-center w-full p-6 mt-8">
            <h2 className="font-happymonkey text-3xl font-bold text-darkblue mb-2 text-center">Crear Evento</h2>
        </div>


        <form className="form " onSubmit={handleFormSubmit}>
            <label className="label" htmlFor="title">Titulo</label>
            <input className="input mt-2" type="text" id="title" />

            <label className="label" htmlFor="children">Hij@(s)</label>
            <input className="input mt-2" type="text" id="children" />

            <label className="label" htmlFor="date">Fecha y Hora  </label>
            <input className="input mt-2" type="datetime-local" id="date" />

            <label className="label" htmlFor="description">Nota</label>
            <input className="input mt-2" type="text" id="description" />


            <div className="w-full mt-8 flex flex-row justify-between gap-2">
                <div className="flex justify-between items-center"> {/* Contenedor de botones */}
                    <button
                        className="flex-1 bg-redmedium text-white text-xl font-montserrat bold py-3 px-8 rounded-full shadow-md mx-2"
                        onClick={handleCancelButtonClick}
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

export default CreateEvent