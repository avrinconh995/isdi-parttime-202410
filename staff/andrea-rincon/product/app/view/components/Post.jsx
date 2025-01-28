import './Post.css'

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

    return <article className="Post">
        <h3 className="Post-author">{props.post.author.username}</h3>

        <img className="Post-image" src={props.post.image} />

        <p className="Post-text">{props.post.text}</p>

        <time>{props.post.date}</time>

        {props.post.own && <button type="button" onClick={handleDeleteButtonClick}>🗑️</button>}
    </article>
}

export default Post

