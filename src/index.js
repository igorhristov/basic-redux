import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux import store from difrent apps
import { Provider } from 'react-redux';
// import store from './components/Counter/ReduxCounter/Redux/store';
// import store from './components/Light/Redux/store';
import store from './components/Bug/store/store';
import * as actions from './components/Bug/store/actions';

store.dispatch(actions.bugAdded('bug 1'));
store.dispatch(actions.bugAdded('bug 2'));
store.dispatch(actions.bugAdded('bug 3'));

console.log(store.getState());
store.dispatch(actions.bugResolved(1))
console.log(store.getState());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
