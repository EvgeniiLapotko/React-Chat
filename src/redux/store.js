import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {dialogsReducers} from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk]

const rootReducer = combineReducers(dialogsReducers);

const store = createStore(rootReducer,
    applyMiddleware(thunk))


export default store;