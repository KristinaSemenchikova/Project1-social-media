import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElements = props.posts.map(item => <Post message = {item.message} likes={item.likes} /> );
  let newPostElement = React.createRef();
  let addpost = () => {
  let text = newPostElement.current.value;
  props.addPost(text);
  newPostElement.current.value = "";
}

  return (
        <div className = {s.myPosts} >
      <h3> My posts</h3>
      <div className={s.newPost}>
        <div> 
          <textarea cols="50" rows="3" ref = {newPostElement}> </textarea>
           </div>
        <button onClick = {addpost}> Add new post </button>
      </div>
      <div className={s.posts}>
      {postElements}
      </div>
      </div>
  )
}

export default MyPosts;