import React, { Component } from 'react';
import s from './Header.module.css';
import SettingsMenu from './SettingsMenu';

const Header = () => {
    // let hover = (event) => {
    //     event.target.src = 'https://image.flaticon.com/icons/svg/1622/1622056.svg';
    // };
    // let leave = (event) => {
    //     event.target.src = 'https://img.icons8.com/small/32/000000/login-rounded-right.png';
    // }
    return (
        <header className={s.header}>
            <span className={s.logo}>
                <img alt='logo' src='http://www.stickpng.com/assets/thumbs/587e32209686194a55adab72.png' />
            </span>
            <div className={s.buttons}>
                <SettingsMenu />
                <a href = '#'>
                    <img  alt='logout' src= 'https://img.icons8.com/small/32/000000/login-rounded-right.png' />
                </a>
            </div>
        </header>
    )
}

export default Header;