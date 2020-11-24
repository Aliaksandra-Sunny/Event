import React from 'react';
import { connect } from 'react-redux';
import { RegistrationMe } from '../../redux/registrationReducer';
import Registration from './Registration';

const RegistrationContainer = props => (
    <Registration {...props} />
);

const mapStateToProps = () => {
    return {

    };
};

export default connect(mapStateToProps, {
    RegistrationMe,
})(RegistrationContainer);
