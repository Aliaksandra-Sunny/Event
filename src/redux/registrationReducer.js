import { registrationAPI } from '../api/api';

const SUCCESSFUL = 'SUCCESSFUL';

const registrationReducer = (state = '', action) => {
    switch (action.type) {
        case SUCCESSFUL:
            return { ...state, registration: true };
        default:
            return state;
    }
};

const successful = data => {
    return { type: SUCCESSFUL, data: { data } };
};
export const RegistrationMe = (name, surname, email, password) => {
    return async dispatch => {
        const response = await registrationAPI.registration(name, surname, email, password);
        if (response.status === 200) {
            return dispatch(successful(response.data));
        }

    };
};
export default registrationReducer;
