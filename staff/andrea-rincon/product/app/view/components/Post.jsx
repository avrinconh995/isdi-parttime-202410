import logic from '../../logic'

import formatDate from '../helper/formatDate'

function Post({ post, onPostDeleted, onPostLikeToggled }) {
    const handleDeleteButtonClick = () => {
        if (confirm('Delete post?'))
            try {
                logic.deletePost(post.id)
                    .then(() => onPostDeleted())
                    .catch(error => {
                        alert(error.message)

                        console.error(error)
                    })
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
    }

    console.log('Post -> render')

    return <article className="border border-black p-1 bg-white">
        <h3 >{post.author.username}</h3>
        <img className="w-full" src={post.image} />
        <p className="m-0">{post.text}</p>

        <div className="button">
            <time className="text-[14px] text-[rgb(30,58,138)">{formatDate(post.date)}</time>

            {post.own && <button type="button" onClick={handleDeleteButtonClick}>🗑️</button>}
        </div>
    </article>
}

export default Post

