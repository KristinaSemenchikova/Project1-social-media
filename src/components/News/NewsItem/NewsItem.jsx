import React from 'react';
import s from './NewsItem.module.scss';
import PropTypes from 'prop-types';

const NewsItem = (props) => {
  let likePost = (e) => {
    if (props.isLiked === false) {
      e.target.src = 'https://image.flaticon.com/icons/svg/291/291212.svg';
      props.onLike(props.id);
    } else {
      e.target.src = 'https://image.flaticon.com/icons/svg/66/66744.svg';
       props.onDislike(props.id);
    }
  };
  return (
    <div className={s.item}>
      <div className = {s.message}>
      {props.newsText}
      <div> <img alt = 'avatar' src={props.img}></img> </div>
      </div>
      <div>
        <div className={s.likeButton}>
          <img alt = 'like' src='https://image.flaticon.com/icons/svg/66/66744.svg' onClick={likePost}></img>
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