const { useState, useEffect } = React

function Posts() {
    const [posts, setPosts] = useState([])
    //this.state = { posts: [] }


    useEffect(() => {
        console.log('Posts -> "componentDidMount" (useEffect)')

        loadPosts()
    }, [])

    const loadPosts = () => {
        try {
            logic.getPosts()
                .then(posts => setPosts(posts))
                .catch(error => {
                    alert(error.message)

                    console.error(error)
                })
        } catch (error) {
            alert(error.message)

            console.error(error)

        }
    }

    const handlePostDeleted = () => loadPosts()

    console.log('Posts -> render')

    return <section>
        {posts.map(post => <Post key={post.id} post={post} onPostDeleted={handlePostDeleted} />
        )}
    </section>
}


