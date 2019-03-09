import React, { Component } from 'react';
import s from './Post.module.css';
const Post = (props) => {
  let likePost = (e) => {
    e.target.src = 'https://image.flaticon.com/icons/svg/291/291212.svg';
  };
  return (
    <div className={s.item}>
      <img alt='avatar' src="https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/Cat4-430028.jpg" ></img>
      {props.message}
      <div className={s.likeButton}>
        <img src='https://image.flaticon.com/icons/svg/66/66744.svg' onClick={likePost}></img>
        {props.likes}
      </div>
    </div>
  )
}

export default Post;