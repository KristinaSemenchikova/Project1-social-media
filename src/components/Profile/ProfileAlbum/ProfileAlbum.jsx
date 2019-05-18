import React, { useState } from 'react';
import s from './ProfileAlbum.module.css';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";



const ProfileAlbum = (props) => {
  const [imgIndex, setImgIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  let image = React.createRef();

  let next = () => {
    if (imgIndex < album.length - 1) {
      setImgIndex(imgIndex + 1);
    }
  }
  let prev = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  }
  let viewImg = (e) => {
    if (isOpen === false) {
      setIsOpen(true);
      let currentImg = album.findIndex((item, i) => +e.currentTarget.id == i)
      setImgIndex(currentImg);
      image.current.style.visibility = 'visible';
    } else {
      setIsOpen(false);
      setImgIndex(0);
      image.current.style.visibility = 'hidden'
    }
  };

  let photos = props.album.slice(0, 4);
  let album = photos.map((item, i) => <img id={i} key={i} src={item} onClick={viewImg}></img>);

  return (
    <div className={s.album}>
      <span> <NavLink to='/album'>My photos {props.album.length} </NavLink></span>
      <span> {album} </span>
      <div className={s.view} ref={image}>
        <button onClick={prev}>prev</button>
        {album[imgIndex]}
        <button onClick={next}>next</button>
      </div>
    </div>
  )
}
ProfileAlbum.propTypes = {
  album: PropTypes.array,
};
export default ProfileAlbum;
