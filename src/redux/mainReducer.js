import {eventAPI} from "../api/api";

const SET_MAIN_MENU = 'SET-MAIN-MENU';

let initialState = {
    photos: [
        {id: 1, name: "angry", src: "../dataImg/angry.jpg"},
        {id: 2, name: "argue", src: "../dataImg/argue.jpg"},
        {id: 3, name: "big", src: "../dataImg/big.jpg"},
        {id: 4, name: "blouse", src: "../dataImg/blouse.jpg"},
        {id: 5, name: "boot", src: "../dataImg/boot.jpg"},
        {id: 6, name: "build", src: "../dataImg/build.jpg"},
        {id: 7, name: "carry", src: "../dataImg/carry.jpg"},
        {id: 8, name: "cat", src: "../dataImg/cat.jpg"},
        {id: 9, name: "catch", src: "../dataImg/catch.jpg"},
    ]
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN_MENU:
            return {...state, ...action.data};
        default:
            return state;
    }
};

const setMainMenu = data => {
    return {type: SET_MAIN_MENU, data: {data}};
};
export const setMainData = () => {
    return async dispatch => {
        const response = await eventAPI.mainMenu();
        if (response.data.status === 200) {
            return dispatch(setMainMenu(response.data.data));
        }

    };
};
export default mainReducer;
