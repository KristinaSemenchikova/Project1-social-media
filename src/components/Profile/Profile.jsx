import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  

  return (
    <div className = {s.profile}>
      <ProfileInfo/>
     <MyPosts posts = {props.profile.posts} addPost = {props.addPost} newPostText = {props.profile.newPostText} updateNewPostText = {props.updateNewPostText}/>
    </div>
  )
}

export default Profile;