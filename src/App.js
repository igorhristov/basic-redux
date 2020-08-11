import React from 'react';
import './App.css';
import Counter from './components/ClassCounter/Counter';
import HooksCounter from './components/HooksCounter/HooksCounter';
function App() {
    return (
        <div className='App'>
            <Counter />
            <HooksCounter />
        </div>
    );
}

export default App;
