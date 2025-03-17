import { useState } from 'react'

import logic from '../../logic'

import formatDate from '../helper/formatDate'

function Post({ post, onPostDeleted, onPostLikeToggled, onPostTextEdited }) {
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(post.text)

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


    const handleToggleLikeClick = () => {
        try {
            logic.toggleLikePost(post.id)
                .then(() => onPostLikeToggled())
                .catch(error => {
                    alert(error.message)

                    console.error(error)
                })
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    const handleEditButtonClick = () => setEdit(true)

    const handleCancelButtonClick = () => {
        setEdit(false)
        setText(post.text)
    }

    const handlePostTextChange = event => setText(event.target.value)

    const handleSaveEditButtonClick = () => {
        setEdit(false)

        try {
            logic.updatePostText(post.id, text)
                .then(() => onPostTextEdited())
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

    return <article className="border border-black rounded-xl p-4">
        <h3 className="m-0">{post.author.username}</h3>

        <img className=" w-full" src={post.image} />

        {edit ?
            <input className="m-0 mb-[1px] bg-blue-500" onChange={handlePostTextChange} defaultValue={text} />
            :
            <p className="m-0 mb-[1px]">{post.text}</p>
        }

        {post.own && <>
            {edit ?
                <div className="flex  justify-between">
                    <button type="button" onClick={handleSaveEditButtonClick} className="border-none outline-none text-white bg-gray-600 rounded-md px-2 py-1">💾</button>

                    <button type="button" onClick={handleCancelButtonClick}>❌</button>
                </div>
                :
                <button className="flex items-center justify-between" type="button" onClick={handleEditButtonClick}>📝</button>

            }
        </>}

        <div className="flex items-center justify-between">
            <time className="text-[14px] text-[rgb(30,58,138)">{formatDate(post.date)}</time>


            <button className="ml-auto bg-none border-none outline-none text-[1.3rem]" type="button" onClick={handleToggleLikeClick}>{`${post.liked ? '❤️' : '🤍'} (${post.likes})`}</button>

            {post.own && <button type="button" onClick={handleDeleteButtonClick}>🗑️</button>}


        </div>
    </article>
}

export default Post

