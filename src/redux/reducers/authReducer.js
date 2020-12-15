import { authAPI } from '../../api/api';

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CURRENT_USER = 'GET_CURRENT_USER';
const LOGOUT = 'LOGOUT';

let initialState = {
    userToken: null,
    isAuth: false,
    userImg: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state,
                ...action.userToken,
                isAuth: true,
                aboutUser: action.aboutUser,
            };

        case LOGOUT:
            return { ...state,
                isAuth: false,
                aboutUser: null,
                userImg: null,
            };

        case GET_CURRENT_USER:
            return { ...state, aboutUser: action.aboutUser };

        default:
            return state;
    }
};

const setUserDataAC = (userToken, aboutUser) => {
    return { type: SET_USER_DATA, userToken, aboutUser };
};

const getCurrentUserAC = aboutUser => {
    return { type: GET_CURRENT_USER, aboutUser };
};

const logOutAC = () => {
    return { type: LOGOUT };
};

export const authMe = data => {
    const { email, password } = data;
    return async dispatch => {
        const response = await authAPI.authenticate(email, password);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            let userToken = response.data.token;
            const userInfo = await authAPI.getCurrentUserInitial(userToken);
            return dispatch(setUserDataAC(userToken, userInfo.data));
        }

    };
};

export const getCurrentUser = () => async dispatch => {
    const response = await authAPI.getCurrentUser();
    if (response.status === 200) {
        dispatch(getCurrentUserAC(response.data));
    }
};

export const logout = () => dispatch => {
    dispatch(logOutAC());
};

export default authReducer;
