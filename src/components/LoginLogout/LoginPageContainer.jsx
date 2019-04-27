import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import {isLogin, authData} from './../../redux/selectors';
import { loginActionCreator, setLoginAC, setPasswordAC} from '../../redux/users-reducer';

const LoginPageContainer = (props) => {
    return (
        <LoginPage
        isLogin = {props.isLogin}
        toLogIn = {props.logIn}
        authData = {props.authData}
        setLogin = {props.setLogin}
        setPassword = {props.setPassword}
        />
    )
}
const mapStateToProps = state => {
    return {
       isLogin : isLogin(state),
       authData : authData(state)
    }
};
const mapDispatchToProps = dispatch => {
    return {
        logIn : () => {
            dispatch(loginActionCreator())
        },
        setLogin : (login) => {
            dispatch(setLoginAC(login))
        },
        setPassword : (password) => {
            dispatch(setPasswordAC(password))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPageContainer);