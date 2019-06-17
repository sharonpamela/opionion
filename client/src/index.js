import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './components/reducers';

// arg 1: createStore are the reducers
// arg 2: initial state of app
// arg 3: middlewares
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    // provider makes the store available to every component 
    // when status is updated in store, all child components get updated
    <Provider store={store}><App /></Provider>
    , document.querySelector("#root")
);
