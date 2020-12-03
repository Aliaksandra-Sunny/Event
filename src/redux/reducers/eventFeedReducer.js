import { getAllEventsAPI } from '../../api/api';

const GET_ALL_EVENT = 'GET_ALL_EVENT';

const eventFeedReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_EVENT:
            return {
                ...state,
                events: action.eventInfo,
            };
        default:
            return state;
    }
};

const getAllEventsAC = eventInfo => {
    return { type: GET_ALL_EVENT, eventInfo };
};

export const getAllEvents = () => async dispatch => {
    const response = await getAllEventsAPI.getAllEvents();
    const result = await Promise.all(response.data.map(async event => {
        const { avatarId } = event;
        let photo = await getAllEventsAPI.getAvatarByPhotoId(avatarId);
        event.avatar = photo.data;
        return event;
    }));
    if (response.status === 200) {
        return dispatch(getAllEventsAC(result));
    }
};
export default eventFeedReducer;
