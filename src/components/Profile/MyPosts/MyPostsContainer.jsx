import React from 'react';
import { addPostActionCreator, updatePostActionCreator, likePostActionCreator, dislikePostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import {posts, newPostText, fullName} from './../../../redux/selectors';

const MyPostsContainer = (props) => {
  return (<MyPosts
    addPost={props.onAddPost}
    updatePost={props.onPostChange}
    posts={props.posts}
    newPostText={props.newPostText}
    onLike={props.onLike}
    onDislike={props.onDislike} 
    name = {props.name}/>)
};

const mapStateToProps = state => {
  return {
    name : fullName(state),
    posts: posts(state),
    newPostText: newPostText(state),
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updatePostActionCreator(text));
    },
    onLike: (id) => {
      dispatch(likePostActionCreator(id))
    },
    onDislike: (id) => {
      dispatch(dislikePostActionCreator(id))
    },
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);
