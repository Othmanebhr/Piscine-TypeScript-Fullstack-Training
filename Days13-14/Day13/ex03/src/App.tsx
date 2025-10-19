import React from 'react';
import UserCard, {User} from './components/user_card';

const App = () =>{
    const user1: User ={
        id: 116,
        name: "Othmane",
        email: "test@mail.com",
        age: 789
    }

    const user2: User={
        id: 789,
        name: "Yanis",
        email: "ggr@mail.com",
        age: 45
    }

    const user3: User ={
        id: 98752,
        name: "Miqdad",
        email: "diagne@mail.com"
    }

    return ( <div>
        <UserCard user={user1}></UserCard>;
        <UserCard user={user2}></UserCard>;
        <UserCard user={user3}></UserCard>;
    </div>);
}

export default App;