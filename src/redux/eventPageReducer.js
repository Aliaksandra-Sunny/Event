import { eventPageAPI } from '../api/api';

const SET_EVENT_PHOTO = 'SET_EVENT_PHOTO';
const SET_EVENT_INFO = 'SET_EVENT_INFO';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const eventPageReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_EVENT_PHOTO:
            return {
                ...state,
                eventPhoto: action.photo,
            };

        case FOLLOW:
            return {
                ...state,
                followed: true,
            };

        case UNFOLLOW:
            return {
                ...state,
                followed: false,
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
export const followAC = status => ({ type: FOLLOW, status });
export const unfollowAC = status => ({ type: UNFOLLOW, status });

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

export const follow = () => async dispatch => {
    const response = await eventPageAPI.follow();
    if (response.status === 200) {
        dispatch(followAC(response.data));
    }
};

export const unfollow = () => async dispatch => {
    const response = await eventPageAPI.unfollow();
    if (response.status === 200) {
        dispatch(unfollowAC(response.data));
    }
};

export default eventPageReducer;
