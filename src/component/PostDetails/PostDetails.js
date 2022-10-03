import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {userId ,id, title, body} = post;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h2>ID : {id}</h2>
            <h1>Title: {title}</h1>
            <p>{body}</p>
            <button onClick={handleNavigate}>Get the Author</button>
        </div>
    );
};

export default PostDetails;