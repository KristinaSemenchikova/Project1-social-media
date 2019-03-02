import React, { Component } from 'react';
import s from './MessageItem.module.css';
import { NavLink } from "react-router-dom";


const MessageItem = (props) => {
let newMessageElement = React.createRef();
let addNewMessage = () => {
  let message = newMessageElement.current.value;
  alert(message);
}; 
  return (
  <div className={s.message} > 
  {props.message} 
  <textarea cols="5" rows="1" ref = {newMessageElement}> </textarea>
  <button onClick = {addNewMessage}> Send </button>
  </div> 
  )
}


export default MessageItem;