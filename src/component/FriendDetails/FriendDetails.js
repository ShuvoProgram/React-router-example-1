import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails = useLoaderData();
    return (
        <div>
            <h2>Name: {friendDetails.name}</h2>
            <p>Call him / her : {friendDetails.phone}</p>
            <h2>Everything you need to know about this person</h2>
        </div>
    );
};

export default FriendDetails;