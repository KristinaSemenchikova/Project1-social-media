import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator,updatePostActionCreator} from './../../../redux/profile-reducer';
import PropTypes from 'prop-types';

const MyPosts = (props) => {

  let postElements = props.posts.map((item,i) => <Post isLiked = {item.isLiked} id = {item.id} key = {i} message={item.message} likes={item.likes} dispatch={props.dispatch}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    // let text = newPostElement.current.value;
      props.dispatch(addPostActionCreator());
  }
  let onPostChange = (e) => {
    // let text = newPostElement.current.value;
    let text = e.target.value;
      props.dispatch(updatePostActionCreator(text));
  };


  return (
    <div className={s.myPosts} >
      <h3> My posts</h3>
      <div className={s.newPost}>
        <div>
          <textarea onChange={onPostChange} cols="50" rows="3" ref={newPostElement} value={props.newPostText} />
        </div>
        <button onClick={addPost}> Add new post </button>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
};

MyPosts.propTypes = {
  post: PropTypes.array,
  newPostText: PropTypes.string
};
export default MyPosts;
