import React, { Component } from 'react';
import s from './Login.module.css';
import axios from 'axios';
import instance from '../../Service/Service';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.toLogIn = this.toLogIn.bind(this);
        this.setLogin = this.setLogin.bind(this);
        this.setPassword = this.setPassword.bind(this)
    }
    toLogIn() {
        instance.post('auth/login',
            {
                email: this.props.authData.login,
                password: this.props.authData.password,
                rememberMe: true,
                
            })
            .then(result => {
                console.log(result);
                if(result.data.resultCode === 0)  {
                    this.props.toLogIn() 
                }
            })
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
                <form className={s.logIn}>
                    <span>Login</span>
                    <input onChange={this.setLogin} value={this.props.authData.login} type='login' />
                    <span> Password</span>
                    <input onChange={this.setPassword} value={this.props.authData.password} type='password' />
                </form>
                <button onClick={this.toLogIn}> Login </button>
            </div>
        )
    }
}
export default Login;
