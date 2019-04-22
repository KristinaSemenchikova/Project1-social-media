import React, { Component } from 'react';
import s from './../Dialogs.module.scss';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path} > <img alt = 'avatar' src = {props.avatar}  ></img> {props.name}  </NavLink>
  </div>
}

export default DialogItem;