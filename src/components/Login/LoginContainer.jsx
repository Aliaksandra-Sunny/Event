import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {authMe} from "../../redux/authReducer";

class LoginContainer extends React.Component {
    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userToken: state.auth.userToken,
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {
    authMe
})(LoginContainer);