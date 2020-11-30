import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';
import mainReducer from './mainReducer';
import eventPageReducer from './eventPageReducer';

let reducers = combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    mainPage: mainReducer,
    eventPage: eventPageReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
