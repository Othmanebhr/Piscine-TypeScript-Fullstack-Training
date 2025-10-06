import React from 'react';

export interface User{
    id: number,
    name: string,
    email: string,
    age?: number
}

interface UserCardProps{
    user: User;
}

function UserCard({user} : UserCardProps){
    return (
        <div style={{ 
            border: '1px solid #ccc', 
            padding: '16px', 
            margin: '8px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
        }}>
            <h3>{user.name}</h3>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {user.age && <p><strong>Age:</strong> {user.age} ans</p>}
        </div>
    );
}

export default UserCard;