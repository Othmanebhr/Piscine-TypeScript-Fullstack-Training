import React from 'react';
import Counter from './components/counter';
import Hello from './components/hello';

const App = () =>{
    return <div>
        <Hello name="in counter!" />
        <Counter />
        </div>;
}

export default App;