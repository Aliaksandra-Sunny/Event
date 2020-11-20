import React, {Component} from 'react';
import './App.css';
import Header from "./Header/Header";
import {Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LoginContainer from "./components/Login/LoginContainer";

class App extends Component {

    render() {
        return (
            <div className='app-wrapper'>
                <Header/>
                <div className="app-wrapper-content">
                    <Route path="/login" render={() => <LoginContainer/>}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
