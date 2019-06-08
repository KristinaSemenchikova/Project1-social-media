import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { isLogin, authData, captcha, loginRequest } from './../../redux/selectors';
import {  toLogIn, setCaptchaValue,  setAuthData } from '../../redux/login-reducer';

const LoginPageContainer = (props) => {
    let login = props.authData.login;
    let password = props.authData.password;
    let captcha = props.captcha;
    let rememberMe = props.authData.rememberMe;

    const submit = values => {
        console.log(values);
        props.setAuthData(values);
        props.toLogIn();
    }

    return (
        <LoginPage
            onSubmit={submit}
            initialValues = {{login,password,rememberMe}}
            isLogin={props.isLogin}
            toLogIn={props.toLogIn}
            authData={props.authData}
            captcha={props.captcha}
            setCaptchaValue={props.setCaptchaValue}
            loginRequest={props.loginRequest}
        />
    )
}
const mapStateToProps = state => {
    return {
        isLogin: isLogin(state),
        authData: authData(state),
        captcha: captcha(state),
        loginRequest: loginRequest(state)
    }
};
const mapDispatchToProps = dispatch => {
    return {
        toLogIn: (data) => {
            dispatch(toLogIn(data))
        },
        setCaptchaValue: (value) => {
            dispatch(setCaptchaValue(value))
        },
        setAuthData : (data)=> {
            dispatch(setAuthData(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);