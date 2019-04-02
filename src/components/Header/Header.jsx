import React from 'react';
import s from './Header.module.css';
import SettingsMenu from './SettingsMenu';
import { NavLink } from "react-router-dom";

const Header = () => {
    // let navLog = React.createRef();
    // let login = () => {
    //     navLog.current.click();
    // };
    // let leave = (event) => {
    //     event.target.src = 'https://img.icons8.com/small/32/000000/login-rounded-right.png';
    // }
    return (
        <header className={s.header}>
            <span className={s.logo} >
                <img alt='logo' src='http://www.stickpng.com/assets/thumbs/587e32209686194a55adab72.png' />
            </span>
            <div className={s.buttons}>
                <SettingsMenu />
                <NavLink to='/login'><img alt='logout' src='https://img.icons8.com/small/32/000000/login-rounded-right.png' /></NavLink>
            </div>
        </header>
    )
}
export default Header;