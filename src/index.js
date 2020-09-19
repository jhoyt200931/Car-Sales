import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { SalesReducer } from './reducers/SalesReducer';
import logger from 'redux-logger';
 
const store = createStore(SalesReducer, applyMiddleware(logger));

console.log(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);
