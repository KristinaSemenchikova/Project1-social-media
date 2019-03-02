import React, { Component } from 'react';
import s from './Nav.module.css';
import { NavLink } from "react-router-dom";
const Friends = (props) => {
    return (
        <div>
            <img src={props.avatar}> </img>
            {props.name}
        </div>
    )
}
export default Friends;