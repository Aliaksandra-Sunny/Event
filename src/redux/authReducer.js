import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userToken: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
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
export const authMe = data => {
    const { email, password } = data;
    return async dispatch => {
        const response = await authAPI.authenticate(email, password);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            let userToken = response.data.token;
            return dispatch(setUserData(userToken));
        }

    };
};
export default authReducer;
