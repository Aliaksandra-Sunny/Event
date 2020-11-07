import React, {Component} from 'react';
import '../App.css';

class Authorization extends Component {
    handleSubmit(event) {
        event.preventDefault();
        console.log('Username is', event.currentTarget[0].value);
        console.log('Password is', event.currentTarget[1].value);
        event.currentTarget[0].value="";
        event.currentTarget[1].value="";
    }
    render() {
        return (
            <div className="App">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    <label>
                        Username
                        <input/>
                    </label>
                    <label>
                        Password
                        <input type="password"/>
                    </label>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Authorization;