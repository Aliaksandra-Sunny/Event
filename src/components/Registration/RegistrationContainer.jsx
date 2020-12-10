import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { RegistrationMe } from '../../redux/reducers/registrationReducer';
import Registration from './Registration';
import Notifications from '../../common/Notifications';

const RegistrationContainer = props => {
    const { isAuth } = props;

    return (
        <div>
            <Registration {...props} />
            { isAuth ? (
                <div>
                    <Redirect to="/" />
                    <Notifications severity="success" text="Registration successful" />
                </div>
            ) : ''}
        </div>

    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, {
    RegistrationMe,
})(RegistrationContainer);
