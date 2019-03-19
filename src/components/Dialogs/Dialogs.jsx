import React, { Component } from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {sendMessageActionCreator,updateMessageTextActionCreator} from './../../redux/dialogs-reducer';

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.dialogs.map((el,i) => <DialogItem key = {i} name={el.name} id={el.id} avatar={el.avatar} />);
  let messageElements = props.dialogs.messages.map((el,i) => <MessageItem key = {i} message={el.message} />);

  let newMessageElement = React.createRef();

  let send = () => {
    props.dispatch(sendMessageActionCreator());
  };
  let onMessageChange = (e) => {
    let message = e.target.value;
    props.dispatch(updateMessageTextActionCreator(message));
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem} activeClassName={s.active}>
        {dialogsElements}
      </div>
      <div className={s.messages} >
        {messageElements}
      </div>
      <div>
        <textarea cols="30" rows="5" ref={newMessageElement} onChange={onMessageChange} value={props.dialogs.newMessage} />
        <button onClick={send}> Send </button>
      </div>

    </div>

  )
}
export default Dialogs;