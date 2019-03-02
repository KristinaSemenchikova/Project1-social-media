import React, { Component } from 'react';
import s from './Post.module.css';
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/Cat4-430028.jpg" ></img>
      {props.message}
      <div>
       <span> like 
         {props.likes} </span> 
      </div>
      </div>
  )
}

export default Post;