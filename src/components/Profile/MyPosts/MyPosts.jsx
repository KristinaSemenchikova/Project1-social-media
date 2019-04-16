import React  from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import PropTypes from 'prop-types';

const MyPosts = (props) => {
  let postElements = props.posts.map((item, i) => <Post
    isLiked={item.isLiked}
    id={item.id}
    key={item.id}
    message={item.message}
    likes={item.likes}
    onLike={props.onLike}
    onDislike={props.onDislike}
    name = {props.name} />
  );
  let addNewPost = () => {
    if (props.newPostText.length !== 0) props.addPost();
  }
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updatePost(text);
  };

  return (
    <div className={s.myPosts} >
      <h3> My posts</h3>
      <div className={s.newPost}>
        <div>
          <textarea onChange={onPostChange} cols="86" rows="3" value={props.newPostText} />
        </div>
        <button onClick={addNewPost}> Add new post </button>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
};

MyPosts.propTypes = {
  posts: PropTypes.array,
  newPostText: PropTypes.string,
  addPost: PropTypes.func,
  updatePost: PropTypes.func,
  onLike: PropTypes.func,
  onDislike: PropTypes.func,
};
export default MyPosts;
    
