import React from 'react';
import { connect } from 'react-redux';
import { isLogin } from '../../redux/selectors';
import { toLogOut, isAuth } from '../../redux/login-reducer';
import Header from './Header';

const HeaderContainer = (props) => {
    return (
        <Header 
        isLogin = {props.isLogin}
        logOut = {props.logOut}
        isAuth = {props.isAuth}
         />
    )
}
const mapStateToProps = state => {
    return {
      isLogin : isLogin(state)    
    }
};
const mapDispatchToProps = dispatch => {
    return {
        logOut : () => {
            dispatch(toLogOut())
        },
          isAuth : () => {
            dispatch(isAuth())
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);