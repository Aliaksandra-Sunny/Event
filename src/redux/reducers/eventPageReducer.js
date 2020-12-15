import { eventPageAPI } from '../../api/api';

const SET_EVENT_PHOTO = 'SET_EVENT_PHOTO';
const SET_EVENT_INFO = 'SET_EVENT_INFO';
const FOLLOW_AND_UNFOLLOW = 'FOLLOW_AND_UNFOLLOW';

const eventPageReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_EVENT_PHOTO:
            return {
                ...state,
                eventPhoto: action.photo,
            };

        case FOLLOW_AND_UNFOLLOW:
            return {
                ...state,
                followed: action.participantsIds.includes(action.userid.id),
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
                userIds: action.eventInfo.userIds,
                followed: action.eventInfo.userIds.includes(action.userId),
            };
        default:
            return state;
    }

};

export const setEventPhotoAC = photo => ({ type: SET_EVENT_PHOTO, photo });
export const setEventInfoAC = (eventInfo, userId) => ({ type: SET_EVENT_INFO, eventInfo, userId });
export const followAndUnFollowAC = (
    status,
    userid,
    participantsIds
) => ({ type: FOLLOW_AND_UNFOLLOW, status, userid, participantsIds });

export const getEventPhoto = id => async dispatch => {
    if (id) {
        const response = await eventPageAPI.getEventPhoto(id);
        if (response.status === 200) {
            dispatch(setEventPhotoAC(response.data));
        }
    }

};

export const getEventInfo = (id, userInfo) => async dispatch => {
    const response = await eventPageAPI.getEventInfo(id);
    if (response.status === 200) {
        dispatch(setEventInfoAC(response.data, userInfo.id));
    }
};

export const follow = (id, userId) => async dispatch => {
    const response = await eventPageAPI.follow(id);
    const currentEvent = await eventPageAPI.getEventInfo(id);
    if (response.status === 200) {
        dispatch(followAndUnFollowAC(response.data, userId, currentEvent.data.userIds));
    }
};

export const unfollow = (id, userId) => async dispatch => {
    const response = await eventPageAPI.unfollow(id);
    const currentEvent = await eventPageAPI.getEventInfo(id);
    if (response.status === 200) {
        dispatch(followAndUnFollowAC(response.data, userId, currentEvent.data.userIds));
    }
};

export default eventPageReducer;
