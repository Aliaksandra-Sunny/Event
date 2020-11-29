import React from 'react';
import { connect } from 'react-redux';
import Main from "./Main";
import {setMainData} from "../../redux/mainReducer";

const MainContainer = props => (
    <Main {...props} />
);

const mapStateToProps = state => {
    return {
        photos: state.mainPage.photos,
    };
};

export default connect(mapStateToProps, {
    setMainData,
})(MainContainer);
