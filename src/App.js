import React, {Component} from 'react';
import './App.css';
import Login from "./components/Login/Login";
import Header from "./Header/Header";
import {Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";

class App extends Component {

    render() {
        return (
            <div className='app-wrapper'>
                <Header/>
                <div className="app-wrapper-content">
                    <Route path="/login" render={() => <Login/>}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
