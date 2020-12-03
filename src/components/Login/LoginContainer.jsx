import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { authMe } from '../../redux/reducers/authReducer';
import Notifications from '../../common/Notifications';

const LoginContainer = props => {
    const { isAuth } = props;

    return (
        <div>
            <Login {...props} />
            { isAuth ? (
                <Notifications severity="success" text="Login successful" />
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
