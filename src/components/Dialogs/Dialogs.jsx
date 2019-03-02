import React, { Component } from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';


const Dialogs = (props) => {
  let dialogsElements = props.dialogs.dialogs.map(el => <DialogItem name={el.name} id={el.id} avatar={el.avatar} />);
  let messageElements = props.dialogs.messages.map(el => <MessageItem message={el.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
    </div>

  )
}
export default Dialogs;