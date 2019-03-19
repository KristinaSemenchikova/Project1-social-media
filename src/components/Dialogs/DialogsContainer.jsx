import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sendMessageActionCreator,updateMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    return (
    <Dialogs/>
  )
};
export default DialogsContainer;