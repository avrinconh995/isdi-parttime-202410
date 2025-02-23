import logic from '../../logic'

function CreatePost({ onPostCreated, onCancel }) {
    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)
                .then(() => onPostCreated())
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

    console.log('CreatePost -> render')

    return <section className="">
        <h3 >Create Post</h3>
        <form onSubmit={handleFormSubmit} >

            <label for="image">Image</label>
            <input className="input w-full" type="url" id="image" />

            <label for="text">Text</label>
            <input className="input w-full" type="text" id="text" />

            <button className="button" type="submit">Create</button>
        </form>
        <button className="button w-full mt-5" onClick={handleCancelButtonClick}>Cancel</button>
    </section>
}

export default CreatePost