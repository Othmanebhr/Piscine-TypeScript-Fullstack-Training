import React from 'react';

interface HelloProps{
    name: string;
}

const Hello: React.FC<HelloProps> = ({name})  => {
    return (<div>
                <h1>hello {name}!</h1>
            </div>);
}

export default Hello;