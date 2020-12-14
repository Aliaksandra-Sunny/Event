import React, { useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import Footer from './components/Footer/Footer';
import LoginContainer from './components/Login/LoginContainer';
import RegistrationContainer from './components/Registration/RegistrationContainer';
import Main from './components/Main/Main';
import EventCardContainer from './components/EventCard/EventCardContainer';
import CreateEventContainer from './components/CreateEvent/CreateEventContainer';
import EventFeedContainer from './components/EventFeed/EventFeedContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { getCurrentUser } from './redux/reducers/authReducer';

const App = props => {

    const { userInfo, getCurrentUser } = props;
    const token = localStorage.token;

    useEffect(() => {
        if (token) {
            getCurrentUser();
        }
    }, []);

    return (
        <div>
            {
                token && !userInfo ?
                    <LinearProgress color="secondary" /> :
                    (
                        <div className="app-wrapper">
                            <HeaderContainer userInfo={userInfo} />
                            <div className="app-wrapper-content">
                                <Route path="/login" render={() => <LoginContainer />} />
                                <Route path="/registration" render={() => <RegistrationContainer />} />
                                <Route exact path="/" render={() => <Main />} />
                                <Route path="/event" render={() => <EventCardContainer />} />
                                <Route path="/create" render={() => <CreateEventContainer />} />
                                <Route path="/feed" render={() => <EventFeedContainer />} />
                                <Route path="/profile" render={() => <ProfileContainer />} />
                            </div>
                            <Footer />
                        </div>
                    )
            }

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
    getCurrentUser,
})(App);
