import React from 'react';
import { connect } from 'react-redux';
import ProfileAlbum from './ProfileAlbum';
import {album} from './../../../redux/selectors';

const ProfileAlbumContainer = (props) => {
  return (
    <ProfileAlbum
    album = {props.album} 
    />       
  )
}
const mapStateToProps = (state) => {
  return {
    album : album(state), 
  }
};
export default connect(mapStateToProps, null)(ProfileAlbumContainer);


