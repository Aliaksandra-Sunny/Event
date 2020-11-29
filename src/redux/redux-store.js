import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';
import mainReducer from "./mainReducer";

let reducers = combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    mainPage: mainReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store ;
