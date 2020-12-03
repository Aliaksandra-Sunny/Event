import { eventPageAPI } from '../../api/api';

const SET_MAIN_MENU = 'SET-MAIN-MENU';

const mainReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_MAIN_MENU:
            return {
                ...state,
                events: action.data,
            };
        default:
            return state;
    }
};

const setMainMenuAC = data => {
    return { type: SET_MAIN_MENU, data };
};

export const setMainData = () => async dispatch => {
    const response = await eventPageAPI.getAllEventss();
    if (response.status === 200) {
        return dispatch(setMainMenuAC(response.data));
    }
};
export default mainReducer;
