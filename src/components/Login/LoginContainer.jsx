import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { authMe } from '../../redux/reducers/authReducer';

const LoginContainer = props => (
    <Login {...props} />
);

const mapStateToProps = state => {
    return {
        userToken: state.auth.userToken,
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, {
    authMe,
})(LoginContainer);
