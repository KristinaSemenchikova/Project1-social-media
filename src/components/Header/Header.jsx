import React from 'react';
import s from './Header.module.css';
import SettingsMenu from './SettingsMenu';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <span className={s.logo} >
                <img alt='logo' src='http://www.stickpng.com/assets/thumbs/587e32209686194a55adab72.png' />
            </span>
            <div className={s.buttons}>
              <NavLink to='/search'><img alt='search' src="https://img.icons8.com/material/48/000000/search.png"/></NavLink>
                <SettingsMenu />
                <NavLink to='/login'><img alt='logout' src='https://img.icons8.com/small/32/000000/login-rounded-right.png' /></NavLink>
            </div>
        </header>
    )
}
export default Header;