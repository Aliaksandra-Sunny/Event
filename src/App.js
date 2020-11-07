import React, {Component} from 'react';
import './App.css';
import Login from "./components/Login";
import Header from "./components/Header";
import {Route} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <div className='app-wrapper'>
                <Header/>
                <div className="app-wrapper-content">
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

export default App;
