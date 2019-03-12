import React, { Component } from 'react';
import s from './Nav.module.css';
import { NavLink } from "react-router-dom";
import Friends from './Friends';
const Nav = (props) => {

    return (
        <nav className={s.nav}>
            <div className={`${s.item} + ${s.active}`}>
                <NavLink to='/profile' activeClassName={s.active}> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}> Messages </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}> News </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}> Music </NavLink>
                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.active}> Settings </NavLink>
                </div>
            </div>
            <div className={s.friends}>
            </div>
        </nav>
    )
}
export default Nav;