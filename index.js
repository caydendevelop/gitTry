import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';    // import here is already enough, since only one file import is enough and we do it at this main js file
import {BrowserRouter, Switch} from 'react-router-dom';
import App from './selfmade_components/App';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose } from 'redux';
import reduxThunk from 'redux-thunk';

// Development only axios helpers!
import axios from 'axios';
window.axios = axios;



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk)));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <App/>
            </Switch>
        </BrowserRouter></Provider>,
    document.getElementById('root')
);

export default store;