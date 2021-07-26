import React, {useState, useEffect} from 'react'
import getPosts from './helpers/getPosts';
import getUser from './helpers/getUser';

const FetchCard = () => {
    const [user, setUser] = useState({});
    const [posts, setsPosts] = useState([]);
    const updateUser = () => {
        getUser()
        .then((newUser) => {
            setUser(newUser);
        })
    }

    const updatePosts = () => {
        getPosts(user.id)
            .then((newPosts) => {
                setsPosts(newPosts);
            })
    }

    useEffect(() => {
        updateUser();
    }, []);

    useEffect(() => {
        if(user?.id) {
            updatePosts();
        }
    }, [user, updatePosts]);

    return (
        <div>
        <button onClick={updateUser}>
            Another user
        </button>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <br />
            <h2>Posts - user: {user.id}</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchCard
