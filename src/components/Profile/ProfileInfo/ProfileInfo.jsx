import React, { Component } from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.info}>
     {/* <div className={s.decoration}>
          <img src='https://hdqwalls.com/download/beautiful-mountains-wallpaper-2048x1152.jpg' />
        </div> */}
      <div className={s.avatar}>
        <img src="https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/Cat4-430028.jpg" />
        <div className={s.description} > Soft Kitty </div>
      </div>
      
    </div>
  )
}

export default ProfileInfo;