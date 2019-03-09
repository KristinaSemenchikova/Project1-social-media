import React, { Component } from 'react';
import s from './NewsItem.module.css';
const NewsItem = (props) => {
  let likePost = (e) => {
    e.target.src = 'https://image.flaticon.com/icons/svg/291/291212.svg';
  };
  return (
    <div className={s.item}>
      {props.newsText}
      <div> <img src={props.img}></img> </div>
      <div>
        <div className={s.likeButton}>
          <img src='https://image.flaticon.com/icons/svg/66/66744.svg' onClick={likePost}></img>
          {props.likes}
        </div>
      </div>
    </div>
  )
}

export default NewsItem;