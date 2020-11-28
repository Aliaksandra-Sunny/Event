import { eventPageAPI } from '../api/api';

const SET_EVENT_INFO = 'GET_GALLERY_PHOTO';

const eventPageReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_EVENT_INFO:
            return {
                ...state,
                eventPhoto: action.photo,
            };
        default:
            return state;
    }

};

export const eventPageAC = photo => ({ type: SET_EVENT_INFO, photo });

export const getEventInfo = () => async dispatch => {
    const response = await eventPageAPI.getEventInfo();
    dispatch(eventPageAC(response.data));
};

export default eventPageReducer;
