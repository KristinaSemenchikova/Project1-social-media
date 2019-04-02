import React from 'react';
import s from './Dialogs.module.css';
import PropTypes from 'prop-types';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((el) => <DialogItem key = {el.id} name={el.name} id={el.id} avatar={el.avatar} />);
  let messageElements = props.messages.map((el) => <MessageItem key = {el.id} message={el.message} />);

  let newMessageElement = React.createRef();

  let send = () => {
    props.onSend();
  };
  let onMessageChange = (e) => {
    let message = e.target.value;
    props.onMessageChange(message);
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
        <textarea cols="30" rows="5" ref={newMessageElement} onChange={onMessageChange} value={props.newMessage} />
        <button onClick={send}> Send </button>
      </div>
    </div>

  )
}
export default Dialogs;
