import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { authMe, getCurrentUser } from '../../redux/reducers/authReducer';
import Header from './Header';

const LoginContainer = props => {
    const { isAuth, getCurrentUser, userInfo } = props;
    const token = localStorage.token;

    useEffect(() => {
        getCurrentUser();
    }, []);

    return (
        <div>
            <Header userInfo={userInfo} isAuth={isAuth} token={token} />
        </div>

    );
};

const mapStateToProps = state => {
    return {
        userToken: state.auth.userToken,
        isAuth: state.auth.isAuth,
        userInfo: state.auth.aboutUser,
    };
};

export default connect(mapStateToProps, {
    authMe, getCurrentUser,
})(LoginContainer);
