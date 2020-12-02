import { createEventAPI } from '../../api/api';

const CREATE_EVENT = 'CREATE_EVENT';

const createEventReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT:
            return {
                ...state,
                id: action.id.id,
            };
        default:
            return state;
    }
};

const createEventAC = id => {
    return { type: CREATE_EVENT, id };
};

export const createEvent = data => async dispatch => {
    const response = await createEventAPI.createEvent(data);
    if (response.status === 200) {
        return dispatch(createEventAC(response.data));
    }

};
export default createEventReducer;
