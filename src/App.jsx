import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Header/Header';
import Footer from './components/Footer/Footer';
import LoginContainer from './components/Login/LoginContainer';
import store from './redux/redux-store';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <div className="app-wrapper-content">
                    <Route path="/login" render={() => <LoginContainer />} />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>

);

export default App;
