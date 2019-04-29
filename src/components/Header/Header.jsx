import React from 'react';
import s from './Header.module.css';
import SettingsMenu from './SettingsMenu';
import { NavLink } from "react-router-dom";
import axios from 'axios';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toLogOut = this.toLogOut.bind(this);
    }
    toLogOut(e) {
        axios.post('https://social-network.samuraijs.com/api/1.0/auth/logout')
            .then(result => {
                console.log(result);
                if (result.data.resultCode === 0) {
                    this.props.logOut(); 
                }
            })
    }
    render() {
        return (
            <header className={s.header}>
                <span className={s.logo} >
                    <img alt='logo' src='http://www.stickpng.com/assets/thumbs/587e32209686194a55adab72.png' />
                </span>
                <div className={s.buttons}>
                    <NavLink to='/search'><img alt='search' src="https://img.icons8.com/material/48/000000/search.png" /></NavLink>
                    <SettingsMenu />                   
                 <NavLink to='/login' onClick = {this.toLogOut}><img alt='logout' src='https://img.icons8.com/small/32/000000/login-rounded-right.png' /></NavLink>
                </div>
            </header>
        )
    }

}
export default Header;