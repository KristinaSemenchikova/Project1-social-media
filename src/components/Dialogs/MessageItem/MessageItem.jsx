import React from 'react';
import s from './MessageItem.module.css';
import { NavLink } from "react-router-dom";


const MessageItem = (props) => {
  return (
  <div className={s.message} > 
  {props.message} 
    </div> 
  )
}


export default MessageItem;