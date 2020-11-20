import {authAPI} from "../api/api";
const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userToken: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.userToken, isAuth: true};
        default:
            return state;
    }
};

const setUserData = (userToken) => {
    return {type: SET_USER_DATA, userToken: {userToken}}
};
export const authMe = (email, password) => {
    return async (dispatch) => {
        debugger
       const response = await authAPI.authenticate(email, password);
       console.log(response);
       debugger;
            if (response.token) {
                let userToken = response.token;
                dispatch(setUserData(userToken));
            };
    }
};
export default authReducer;