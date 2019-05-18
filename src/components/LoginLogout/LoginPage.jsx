import React from 'react';
import s from './Login.module.scss';
import { Redirect } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const Login = (props) => {
    let toLogIn = () => props.toLogIn();
    let setLogin = (e) => {
        let login = e.target.value;
        props.setLogin(login)
    }
    let setPassword = (e) => {
        let password = e.target.value;
        props.setPassword(password)
    }
    let setCaptchaValue = (e) => props.setCaptchaValue(e.target.value);
    let toggleRememberMe = () => props.toggleRememberMe();
    return (
        <div>
            {props.isLogin && <Redirect to='/profile' />}
            <form className={s.logIn}>
                <span>Login</span>
                <input onChange={setLogin} value={props.authData.login} type='login' />
                <span> Password</span>
                <input onChange={setPassword} value={props.authData.password} type='password' />
                <label>Remember me<input type='checkbox' onChange={toggleRememberMe} checked={props.authData.rememberMe} /></label>
            </form>
            {props.captcha.isCaptchaRequired && <div>
                <img src={props.captcha.captchaUrl} />
                <input type='text' value={props.captcha.captchaAValue} onChange={setCaptchaValue} />
            </div>}
            {props.loginRequest.status === 'IN_PROGRESS'
                ? <Preloader />
                : <button onClick={toLogIn}> Login </button>}
        </div>
    )
}
export default Login;
