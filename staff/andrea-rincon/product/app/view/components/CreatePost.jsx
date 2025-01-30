import logic from '../../logic'

function CreatePost(props) {
    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)
                .then(() => props.onPostCreated())
                .catch(error => {
                    alert(error.message)
                    console.error(error)
                })


        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    const handleCancelButtonClick = () => props.onCancel()

    console.log('CreatePost -> render')

    return <section className="CreatePost-content">
        <h3 >Create Post</h3>
        <form onSubmit={handleFormSubmit} className="Create-form" >

            <label for="image">Image</label>
            <input type="url" id="image" />

            <label for="text">Text</label>
            <input type="text" id="text" />

            <button className="CreatePost-button" type="submit">Create</button>
        </form>
        <button className="Cancel-button" onClick={handleCancelButtonClick}>Cancel</button>
    </section>
}

export default CreatePost