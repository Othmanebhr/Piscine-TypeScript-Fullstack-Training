import React from 'react';
import Hello from './components/hello';

const App: React.FC = () => {
    return (
        <div className="APP">
            <Hello name="World" />
            <Hello name="React" />
            <Hello name="TypeScript" />
        </div>
    );
};

export default App;