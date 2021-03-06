import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './reducers/authReducer';
import registrationReducer from './reducers/registrationReducer';
import mainReducer from './reducers/mainReducer';
import eventPageReducer from './reducers/eventPageReducer';
import createEventReducer from './reducers/createEventReducer';
import eventFeedReducer from './reducers/eventFeedReducer';
import profileReducer from './reducers/profileReducer';

let reducers = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    registration: registrationReducer,
    mainPage: mainReducer,
    eventPage: eventPageReducer,
    createEvent: createEventReducer,
    getAllEvents: eventFeedReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
