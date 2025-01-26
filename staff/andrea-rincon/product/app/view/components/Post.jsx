import logic from '../../logic'

function Post(props) {
    const handleDeleteButtonClick = () => {
        if (confirm('Delete post?'))
            try {
                logic.deletePost(props.post.id)

                props.onPostDeleted()
            } catch (error) {
                alert(error.message)

                console.error(error)

            }
    }

    console.log('Post -> render')

    return <article>
        <h3>{props.post.author.username}</h3>

        <img src={props.post.image} />

        <p>{props.post.text}</p>

        <time>{props.post.date}</time>

        {props.post.own && <button type="button" onClick={handleDeleteButtonClick}>🗑️</button>}
    </article>
}

export default Post

