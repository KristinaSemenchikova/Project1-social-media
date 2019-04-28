import React from 'react';
import { connect } from 'react-redux';
import { isLogin } from '../../redux/selectors';
import { logOutAC } from '../../redux/users-reducer';
import Header from './Header';

const HeaderContainer = (props) => {
    return (
        <Header 
        isLogin = {props.isLogin}
        logOut = {props.logOut}
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
            dispatch(logOutAC())
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);