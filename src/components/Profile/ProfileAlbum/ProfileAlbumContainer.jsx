import React from 'react';
import { connect } from 'react-redux';
import {album} from './../../../redux/selectors';
import Album from './Album';
import { NavLink } from "react-router-dom";

const ProfileAlbumContainer = (props) => {
  let album = props.album.slice(0, 4);
  return (
    <Album
    title = {<NavLink to='/album'>My photos </NavLink>}
    album = {album} 
    />       
  )
}
const mapStateToProps = (state) => {
  return {
    album : album(state), 
  }
};
export default connect(mapStateToProps, null)(ProfileAlbumContainer);


