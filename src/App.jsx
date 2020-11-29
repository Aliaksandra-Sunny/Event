import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginContainer from './components/Login/LoginContainer';
import store from './redux/redux-store';
import RegistrationContainer from './components/Registration/RegistrationContainer';
import MainContainer from "./components/Main/MainContainer";

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <div className="app-wrapper-content">
                    <Route path="/login" render={() => <LoginContainer />} />
                    <Route path="/registration" render={() => <RegistrationContainer />}/>
                    <Route path={"/"} render={()=> <MainContainer/>}/>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>

);

export default App;
