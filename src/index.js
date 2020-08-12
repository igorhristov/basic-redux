import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux import store from difrent apps
import { Provider } from 'react-redux';
// import store from './components/Counter/ReduxCounter/Redux/store';
import store from './components/Light/Redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
