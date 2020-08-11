import React from 'react';
import './App.css';
import ClassCounter from './components/Counter/ClassCounter/ClassCounter';
import HooksCounter from './components/Counter/HooksCounter/HooksCounter';
import ReduxCounter from './components/Counter/ReduxCounter/ReduxCounter';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    count: 0,
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };

        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const store = createStore(reducer);

console.log('created', store.getState());

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

console.log('done', store.getState());

const App = () => {
    return (
        <Provider store={store} className='App'>
            <ClassCounter />
            <HooksCounter />
            <ReduxCounter />
        </Provider>
    );
};

export default App;
