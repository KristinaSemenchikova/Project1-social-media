import React from 'react';
import { updateStatusActionCreator, setStatus, getStatus,getProfileInfo } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import {info, status} from './../../../redux/selectors';

const ProfileInfoContainer = (props) => {
  return (
    <ProfileInfo 
    info = {props.info} 
    status={props.status} 
    addStatus = {props.addStatus}
    getStatus = {props.getStatus}
    updateStatus = {props.updateStatus} 
    getProfileInfo = {props.getProfileInfo} />  
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
  addStatus : (status) => {
    dispatch(setStatus(status))
  },
  getStatus : () => {
    dispatch(getStatus())
  },
  updateStatus: (text) => {
    dispatch(updateStatusActionCreator(text))
  },
  getProfileInfo : (id) => {
    dispatch(getProfileInfo(id))
  }
}
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer);


