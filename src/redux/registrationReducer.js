import { registrationAPI } from '../api/api';

const SUCCESSFUL = 'SUCCESSFUL';

let initialState = {
    userToken: null,
    isAuth: false,
};

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESSFUL:
            return { ...state, registration: true };
        default:
            return state;
    }
};

const successful = token => {
    return { type: SUCCESSFUL, data: { token } };
};
export const RegistrationMe = (name, surname, email, password) => {
    return async dispatch => {
        const response = await registrationAPI.registration(name, surname, email, password);
        if (response.status === 200) {
            return dispatch(successful(response.data.token));
        }

    };
};
export default registrationReducer;
