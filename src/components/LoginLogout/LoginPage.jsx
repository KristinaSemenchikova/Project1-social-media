import React, { Component } from 'react';
import s from './Login.module.css';

const Login = (props) => {
    return (
        <div>
                <form className={s.logIn}>
                    <span>Login</span>
                    <input type='login'/>
                    <span> Password</span>
                    <input type='password'/>
                </form>
                <button> Login </button>
        </div>
    )
}
export default Login;
