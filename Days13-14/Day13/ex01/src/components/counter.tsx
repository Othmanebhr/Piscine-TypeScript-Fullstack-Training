import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState<number>(0);

    return <div>
        <h2>Compteur: {count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
    </div>;
}

export default Counter;