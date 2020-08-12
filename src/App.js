import React from 'react';
import './App.css';
import ClassCounter from './components/Counter/ClassCounter/ClassCounter';
import HooksCounter from './components/Counter/HooksCounter/HooksCounter';
import ReduxCounter from './components/Counter/ReduxCounter/ReduxCounter';

import Light from './components/Light/component/Light';
const App = () => {
    return (
        <>
            <Light />
            <ClassCounter />
            <HooksCounter />
            <ReduxCounter />
        </>
    );
};

export default App;
