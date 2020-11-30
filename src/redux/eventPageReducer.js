import { eventPageAPI } from '../api/api';

const SET_EVENT_PHOTO = 'SET_EVENT_PHOTO';
const SET_EVENT_INFO = 'SET_EVENT_INFO';

const eventPageReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_EVENT_PHOTO:
            return {
                ...state,
                eventPhoto: action.photo,
            };
        case SET_EVENT_INFO:
            return {
                ...state,
                id: action.eventInfo.id,
                title: action.eventInfo.title,
                description: action.eventInfo.description,
                category: action.eventInfo.category,
                start: action.eventInfo.start,
                finish: action.eventInfo.finish,
                place: action.eventInfo.place,
                author: action.eventInfo.author,
            };
        default:
            return state;
    }

};

export const setEventPhotoAC = photo => ({ type: SET_EVENT_PHOTO, photo });
export const setEventInfoAC = eventInfo => ({ type: SET_EVENT_INFO, eventInfo });

export const getEventPhoto = () => async dispatch => {
    const response = await eventPageAPI.getEventPhoto();
    if (response.status === 200) {
        dispatch(setEventPhotoAC(response.data));
    }
};

export const getEventInfo = () => async dispatch => {
    const response = await eventPageAPI.getEventInfo();
    if (response.status === 200) {
        dispatch(setEventInfoAC(response.data));
    }
};

export default eventPageReducer;
