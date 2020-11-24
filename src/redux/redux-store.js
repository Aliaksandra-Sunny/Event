import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';

let reducers = combineReducers({
    auth: authReducer,
    registration: registrationReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
