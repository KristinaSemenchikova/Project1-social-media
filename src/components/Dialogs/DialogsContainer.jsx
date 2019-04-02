import React from 'react';
import { connect } from 'react-redux';
import {sendMessageActionCreator,updateMessageTextActionCreator} from '../../redux/dialogs-reducer';
import {newMessage, dialogs, messages} from './../../redux/selectors';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    return (
    <Dialogs 
    newMessage = {props.newMessage}
    dialogs ={props.dialogs}
    messages = {props.messages}
    onMessageChange = {props.onMessageChange}
    onSend = {props.onSend}
    />
  )
};

const mapStateToProps = state => {
  return {
    newMessage: newMessage(state),
    dialogs: dialogs(state),
    messages:  messages(state)
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onMessageChange: (message) => {
      dispatch(updateMessageTextActionCreator(message))
    },
    onSend: () => {
      dispatch(sendMessageActionCreator())
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(DialogsContainer);


