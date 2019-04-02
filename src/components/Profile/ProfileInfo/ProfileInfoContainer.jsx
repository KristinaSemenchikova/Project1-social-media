import React from 'react';
import { addStatusActionCreator, updateStatusActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import {info, status} from './../../../redux/selectors';

const ProfileInfoContainer = (props) => {
  return (
    <ProfileInfo 
    info = {props.info} 
    status={props.status} 
    addStatus = {props.addStatus}
    updateStatus = {props.updateStatus} />
  )
}
const mapStateToProps = (state) => {
  return {
    info : info(state), 
    status:  status(state)
  }
};
const mapDispatchToProps = (dispatch) => {
return {
  addStatus : (text) => {
    dispatch(addStatusActionCreator(text))
  },
  updateStatus: (text) => {
    dispatch(updateStatusActionCreator(text))
  }
}
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer);


