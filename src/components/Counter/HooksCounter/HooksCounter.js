import React, { useState } from 'react';
import '../counter.css';

const HooksCounter = () => {
    const [count, setCount] = useState(0);

    const decrament = () => {
        setCount(count - 1);
    };

    return (
        <div className='container'>
            <h2>Hooks Counter</h2>

            <div className='counter'>
                <button onClick={decrament}>-</button>
                <span className='count'>{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    );
    
};

export default HooksCounter;
