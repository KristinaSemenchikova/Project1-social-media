import React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import { id } from '../../redux/selectors';
import { getProfileInfo, getStatus } from '../../redux/profile-reducer';

const NavContainer = (props) => {
  return (
   <Nav 
   userId = {props.userId}
   getProfileInfo = {props.getProfileInfo}
   getStatus = {props.getStatus}
   />
  )
}
const mapStateToProps = state => {
  return {
    userId : id(state)
  }
};
export default connect(mapStateToProps,{getProfileInfo,getStatus})(NavContainer) ;
