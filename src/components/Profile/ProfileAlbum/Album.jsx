import React, { useState } from 'react';
import s from './ProfileAlbum.module.css';

const Album = (props) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  let image = React.createRef();

  let next = () => {
    if (imgIndex < album.length - 1) {
      setImgIndex(imgIndex + 1);
    }
  }
  let prev = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1)
    }
  }
  let viewImg = (e) => {
    if (isOpen === false) {
      setIsOpen(true);
      let currentImg = album.findIndex((item, i) => +e.currentTarget.id === i)
      setImgIndex(currentImg);
      image.current.style.visibility = 'visible';
    } else {
      setIsOpen(false);
      setImgIndex(0);
      image.current.style.visibility = 'hidden'
    }
  };
  let album = props.album.map((item, i) => <img alt = 'photo' id={i} key={i} src={item} onClick={viewImg}></img>);
  return (
    <div className={s.album}>
      <span>{props.title}</span>
      <div > {album} </div>
      <div className={s.view} ref={image}>
        <button onClick={prev}>prev</button>
        {album[imgIndex]}
        <button onClick={next}>next</button>
      </div>
    </div>
  )
}
export default Album;
