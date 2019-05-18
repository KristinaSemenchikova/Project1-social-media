import React from 'react';
import { connect } from 'react-redux';
import { isLogin, userId } from '../../redux/selectors';
import { toLogOut, isAuth } from '../../redux/login-reducer';
import Header from './Header';
import { getProfileInfo, getStatus } from '../../redux/profile-reducer';

const HeaderContainer = (props) => {
    return (
        <Header 
        isLogin = {props.isLogin}
        logOut = {props.logOut}
        isAuth = {props.isAuth}
        userId = {props.userId}
        getProfileInfo = {props.getProfileInfo}
        getStatus = {props.getStatus}
         />
    )
}
const mapStateToProps = state => {
    return {
      isLogin : isLogin(state) ,
      userId : userId(state)
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
        getProfileInfo : (id) => {
            dispatch(getProfileInfo(id))
        },
        getStatus : (id) => {
            dispatch(getStatus(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);