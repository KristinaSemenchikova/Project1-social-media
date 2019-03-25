import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sendMessageActionCreator,updateMessageTextActionCreator} from '../../redux/dialogs-reducer';
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
    newMessage: state.dialogsPage.newMessage,
    dialogs: state.dialogsPage.dialogs,
    messages:  state.dialogsPage.messages
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


