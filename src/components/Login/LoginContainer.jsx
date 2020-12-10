import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Login from './Login';
import { authMe } from '../../redux/reducers/authReducer';
import Notifications from '../../common/Notifications';

const LoginContainer = props => {
    const { isAuth } = props;

    return (
        <div>
            <Login {...props} />
            { isAuth ? (
                <div>
                    <Notifications severity="success" text="Login successful" />
                    <Redirect to="/" />
                </div>
            ) : ''}
        </div>

    );
};

const mapStateToProps = state => {
    return {
        userToken: state.auth.userToken,
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, {
    authMe,
})(LoginContainer);
