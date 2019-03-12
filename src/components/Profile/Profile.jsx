import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {


  return (
    <div className={s.profile}>
      <ProfileInfo status={props.profile.statusText} dispatch={props.dispatch} />
      <MyPosts posts={props.profile.posts} newPostText={props.profile.newPostText} dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;


