import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const navigate = useNavigate();
    const {id, title, body} = post;
    const postHandle = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div>
            <h2>Title: {title}</h2>
            <p>{body}</p>
            <button onClick={postHandle}>Show post</button>
        </div>
    );
};

export default Post;