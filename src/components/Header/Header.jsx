import React from 'react';
import s from './Header.module.css';
import SettingsMenu from './SettingsMenu';
import { NavLink,Redirect } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toLogOut = this.toLogOut.bind(this);
    }
    componentWillMount(){
        this.props.isAuth();
    }
    toLogOut() {
      this.props.logOut();
    }
    render() {
        return (<>
            {!this.props.isLogin && <Redirect to="/login"/>}
            <header className={s.header}>
                <span className={s.logo} >
                    <img alt='logo' src='http://www.stickpng.com/assets/thumbs/587e32209686194a55adab72.png' />
                </span>
                <div className={s.buttons}>
                    <NavLink to='/search'><img alt='search' src="https://img.icons8.com/material/48/000000/search.png" /></NavLink>
                    <SettingsMenu />
                    <a onClick={this.toLogOut}><img alt='logout' src='https://img.icons8.com/small/32/000000/login-rounded-right.png' /></a>
                </div>
            </header>
            </>
        )
    }

}
export default Header;