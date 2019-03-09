import React, { Component } from 'react';
import s from './NewsItem.module.css';
const NewsItem = (props) => {
  return (
    <div className={s.item}>
      {props.newsText}
      <div> <img src={props.img}></img> </div>
      <div>
        <span> like
         {props.likes} </span>
      </div>
    </div>
  )
}

export default NewsItem;