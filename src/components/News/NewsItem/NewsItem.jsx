import React, { Component } from 'react';
import s from './NewsItem.module.css';
import PropTypes from 'prop-types';
import {likeNewsActionCreator, unlikeNewsActionCreator} from './../../../redux/news-reducer';

const NewsItem = (props) => {
  let likePost = (e) => {
    if (props.isLiked == false) {
      e.target.src = 'https://image.flaticon.com/icons/svg/291/291212.svg';
      props.dispatch(likeNewsActionCreator(props.id));
    } else {
      e.target.src = 'https://image.flaticon.com/icons/svg/66/66744.svg';
       props.dispatch(unlikeNewsActionCreator(props.id));
    }
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
NewsItem.propTypes = {
  likes: PropTypes.number,
  img: PropTypes.string,
  newsText: PropTypes.string,
  id: PropTypes.number
}

export default NewsItem;