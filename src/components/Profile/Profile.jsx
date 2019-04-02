import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import ProfileAlbumContainer from './ProfileAlbum/ProfileAlbumContainer';


const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfoContainer/>
      <ProfileAlbumContainer/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;


