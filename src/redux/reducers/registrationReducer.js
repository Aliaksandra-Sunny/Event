import { registrationAPI } from '../../api/api';

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userToken: null,
    isAuth: false,
};

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.userToken, isAuth: true };
        default:
            return state;
    }
};

const setUserData = userToken => {
    return { type: SET_USER_DATA, userToken: { userToken } };
};
export const RegistrationMe = data => {
    return async dispatch => {
        const response = await registrationAPI.registration(data);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            let userToken = response.data.token;
            return dispatch(setUserData(userToken));
        }

    };
};
export default registrationReducer;
