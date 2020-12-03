import { authAPI } from '../../api/api';

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CURRENT_USER = 'GET_CURRENT_USER';

let initialState = {
    userToken: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.userToken, isAuth: true };

        case GET_CURRENT_USER:
            return { ...state, aboutUser: action.aboutUser };

        default:
            return state;
    }
};

const setUserDataAC = userToken => {
    return { type: SET_USER_DATA, userToken };
};

const getCurrentUserAC = aboutUser => {
    return { type: GET_CURRENT_USER, aboutUser };
};

export const authMe = data => {
    const { email, password } = data;
    return async dispatch => {
        const response = await authAPI.authenticate(email, password);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            let userToken = response.data.token;
            return dispatch(setUserDataAC(userToken));
        }

    };
};

export const getCurrentUser = () => async dispatch => {
    const response = await authAPI.getCurrentUser();
    if (response.status === 200) {
        dispatch(getCurrentUserAC(response.data));
    }
};

export default authReducer;
