import React from 'react';
import CallBackButton from './components/callback';

const App = () => {
    const handleAlert = () => {
        alert("Hello from callback");
    }
    const handleConsole = () => {
        console.log("Send on console");
    }
    const handleRandom = () => {
        console.log("Random numbuer:", Math.random());
    }
    return <div>
        <CallBackButton label='Alert' onClick={handleAlert}></CallBackButton>
        <CallBackButton label='Console' onClick={handleConsole}></CallBackButton>
        <CallBackButton label='Random' onClick={handleRandom}></CallBackButton>
    </div>;
}

export default App;