import React from 'react';
import { connect } from 'react-redux';
import { RegistrationMe } from '../../redux/reducers/registrationReducer';
import Registration from './Registration';
import Notifications from '../../common/Notifications';

const RegistrationContainer = props => {
    const { isAuth } = props;

    return (
        <div>
            <Registration {...props} />
            { isAuth ? (
                <Notifications severity="success" text="Registration successful" />
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
