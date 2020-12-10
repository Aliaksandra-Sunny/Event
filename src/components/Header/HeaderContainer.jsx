import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { authMe, getCurrentUser } from '../../redux/reducers/authReducer';
import Header from './Header';

const LoginContainer = props => {

    const { isAuth, userInfo, userImg, getCurrentUser } = props;
    const token = localStorage.token;

    useEffect(() => {
        if (token) {
            getCurrentUser();
        }
    }, []);

    return (
        <div>
            <Header
                userInfo={userInfo}
                userImg={userImg}
                isAuth={isAuth}
                token={token}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userToken: state.auth.userToken,
        isAuth: state.auth.isAuth,
        userInfo: state.auth.aboutUser,
        userImg: state.auth.photo,
    };
};

export default connect(mapStateToProps, {
    authMe, getCurrentUser,
})(LoginContainer);
