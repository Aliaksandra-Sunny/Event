import { getAllEventsAPI, userAPI } from '../../api/api';

const SET_PROFILE_PICTURE = 'SET_PROFILE_PICTURE';

const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_PROFILE_PICTURE:
            return {
                ...state,
                ProfileImage: action.image,
            };
        default:
            return state;
    }
};

const SetProfilePictureAC = image => {
    return { type: SET_PROFILE_PICTURE, image };
};

export const getProfilePicture = id => async dispatch => {
    const response = await getAllEventsAPI.getAvatarByPhotoId(id);
    if (response.status === 200) {
        return dispatch(SetProfilePictureAC(response.data));
    }
};

export const setProfilePicture = picture => async dispatch => {
    const response = await userAPI.saveAvatarForUser(picture);
    if (response.status === 200) {
        return dispatch(SetProfilePictureAC(response.data));
    }
};
export default profileReducer;
