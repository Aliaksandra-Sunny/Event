import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Footer from './components/Footer/Footer';
import LoginContainer from './components/Login/LoginContainer';
import store from './redux/redux-store';
import RegistrationContainer from './components/Registration/RegistrationContainer';
import Main from './components/Main/Main';
import EventCardContainer from './components/EventCard/EventCardContainer';
import CreateEventContainer from './components/CreateEvent/CreateEventContainer';
import EventFeedContainer from './components/EventFeed/EventFeedContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <div className="app-wrapper-content">
                    <Route path="/login" render={() => <LoginContainer />} />
                    <Route path="/registration" render={() => <RegistrationContainer />} />
                    <Route path="/main" render={() => <Main />} />
                    <Route path="/event" render={() => <EventCardContainer />} />
                    <Route path="/create" render={() => <CreateEventContainer />} />
                    <Route path="/feed" render={() => <EventFeedContainer />} />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>

);

export default App;
