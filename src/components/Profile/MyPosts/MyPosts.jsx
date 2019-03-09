import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {actionCreator} from '../../../redux/state';

const MyPosts = (props) => {

  let postElements = props.posts.map((item,i) => <Post key = {i} message={item.message} likes={item.likes} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    // let text = newPostElement.current.value;
      props.dispatch(actionCreator('ADD-POST','ADD-POST'));
  }
  let onPostChange = (e) => {
    // let text = newPostElement.current.value;
    let text = e.target.value;
      props.dispatch(actionCreator('UPDATE-NEW-POST-TEXT',text));
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
}

export default MyPosts;