import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './authReducer';

let reducers = combineReducers({
    auth: authReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
