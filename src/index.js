import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import newsReducer from './store/reducers/newsReducer';
import thunk from "redux-thunk";
import axios from 'axios';

// axios.defaults.baseURL = 'https://sherepsite-project.firebaseio.com/';
//
// axios.interceptors.request.use(request => {
//     console.log(request);
//     // Edit request config
//     return request;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// });
//
// axios.interceptors.response.use(response => {
//     console.log(response);
//     // Edit request config
//     return response;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// });

const composeEnhancers =  compose;

const rootReducer = combineReducers({
    newsState: newsReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>>
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
