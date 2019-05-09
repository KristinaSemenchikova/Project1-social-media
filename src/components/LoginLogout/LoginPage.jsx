import React, { Component } from 'react';
import s from './Login.module.css';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.toLogIn = this.toLogIn.bind(this);
        this.setLogin = this.setLogin.bind(this);
        this.setPassword = this.setPassword.bind(this)
    }
    toLogIn() {
        this.props.toLogIn(this.props.authData)
    }
    setLogin(e) {
        let login = e.target.value;
        this.props.setLogin(login)
    }
    setPassword(e) {
        let password = e.target.value;
        this.props.setPassword(password)
    }
    render() {
        return (
            <div>
                {this.props.isLogin && <Redirect to = '/profile'/>}
                <form className={s.logIn}>
                    <span>Login</span>
                    <input onChange={this.setLogin} value={this.props.authData.login} type='login' />
                    <span> Password</span>
                    <input onChange={this.setPassword} value={this.props.authData.password} type='password' />
                    <label>Remember me<input type = 'checkbox' value={this.props.authData.rememberMe} /></label>
                </form>
                <button onClick={this.toLogIn}> Login </button>
            </div>
        )
    }
}
export default Login;
