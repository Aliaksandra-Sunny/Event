import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import { authMe, logout } from '../../redux/reducers/authReducer';
import Header from './Header';
import { getProfilePicture } from '../../redux/reducers/profileReducer';

const HeaderContainer = props => {

    const { isAuth, userInfo, userImg, getProfilePicture, logout } = props;
    const token = localStorage.token;

    useEffect(() => {
        if (userInfo) {
            const { avatarId } = userInfo;
            if (avatarId) {
                getProfilePicture(avatarId);

            }
        }
    }, []);

    return (
        <div>
            {
                (token && userInfo) || !token ? (
                    <Header
                        userInfo={userInfo}
                        userImg={userImg}
                        isAuth={isAuth}
                        token={token}
                        logout={logout}
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
    authMe, getProfilePicture, logout,
})(HeaderContainer);
