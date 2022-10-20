import {createStore, 
    applyMiddleware
}from 'redux';
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducers from './reducers';

const middlewares = [thunk];
const store = createStore(combinedReducers,
    composeWithDevTools(
        applyMiddleware(...middlewares)
        // other store enhancers if any
    ));

export default store;