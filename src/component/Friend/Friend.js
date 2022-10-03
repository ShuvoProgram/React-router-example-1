import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, name, email, username} = friend;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <span><small>username: <Link to={`/friend/${id}`}>{username}</Link></small></span>
        </div>
    );
};

export default Friend;