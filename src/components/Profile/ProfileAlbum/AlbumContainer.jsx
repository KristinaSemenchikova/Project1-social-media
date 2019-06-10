import React from 'react';
import { connect } from 'react-redux';
import Album from './Album';
import {album} from './../../../redux/selectors';

const AlbumContainer = (props) => {
  return (
  <Album 
  album = {props.album} 
  title = 'My photos'
  />)
}

const mapStateToProps = (state) => {
  return {
    album : album(state), 
  }
};
export default connect(mapStateToProps, null)(AlbumContainer);

