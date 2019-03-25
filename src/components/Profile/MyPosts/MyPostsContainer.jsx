import React, { Component } from 'react';
import { addPostActionCreator, updatePostActionCreator, likePostActionCreator, dislikePostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  return (<MyPosts
    addPost={props.onAddPost}
    updatePost={props.onPostChange}
    posts={props.posts}
    newPostText={props.newPostText}
    onLike={props.onLike}
    onDislike={props.onDislike} />)
};

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
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
