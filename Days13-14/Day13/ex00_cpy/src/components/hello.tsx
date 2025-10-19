import React from 'react';

interface HelloProps{
    name: string;
}

function Hello({name} : HelloProps)
{
    return (<div> <h1>Hello {name}!</h1> </div>);
}

export default Hello;