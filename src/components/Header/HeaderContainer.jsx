import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import { authMe } from '../../redux/reducers/authReducer';
import Header from './Header';
import { getProfilePicture } from '../../redux/reducers/profileReducer';

const HeaderContainer = props => {

    const { isAuth, userInfo, userImg, getProfilePicture } = props;
    const token = localStorage.token;

    useEffect(() => {
        if (userInfo.avatarId) {
            getProfilePicture(userInfo.avatarId);
        }
    }, []);

    return (
        <div>
            {
                token && userInfo ? (
                    <Header
                        userInfo={userInfo}
                        userImg={userImg}
                        isAuth={isAuth}
                        token={token}
                    />
                ) :
                    <LinearProgress color="secondary" />
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userToken: state.auth.userToken,
        isAuth: state.auth.isAuth,
        userImg: state.profile.ProfileImage,
    };
};

export default connect(mapStateToProps, {
    authMe, getProfilePicture,
})(HeaderContainer);
