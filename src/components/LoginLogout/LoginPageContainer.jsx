import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { isLogin, authData, captcha, loginRequest } from './../../redux/selectors';
import { setLoginAC, setPasswordAC, toLogIn, setCaptchaValue, toggleRememberMe } from '../../redux/login-reducer';

const LoginPageContainer = (props) => {
    return (
        <LoginPage
            isLogin={props.isLogin}
            toLogIn={props.toLogIn}
            authData={props.authData}
            setLogin={props.setLogin}
            setPassword={props.setPassword}
            captcha={props.captcha}
            setCaptchaValue={props.setCaptchaValue}
            loginRequest={props.loginRequest}
            toggleRememberMe = {props.toggleRememberMe}
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
        setLogin: (login) => {
            dispatch(setLoginAC(login))
        },
        setPassword: (password) => {
            dispatch(setPasswordAC(password))
        },
        toggleRememberMe: () => {
            dispatch(toggleRememberMe())
        },
        setCaptchaValue: (value) => {
            dispatch(setCaptchaValue(value))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);