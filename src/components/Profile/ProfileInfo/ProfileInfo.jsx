import React, { Component } from 'react';
import s from './ProfileInfo.module.css';
import { addStatusActionCreator, updateStatusActionCreator } from './../../../redux/profile-reducer';

const ProfileInfo = (props) => {
  let statusField = React.createRef();
  let status = React.createRef();
  let statusArea = React.createRef();
  let setStatus = (e) => {
    e.target.style.display = 'none';
    statusField.current.style.display = 'inline';
  };
  let saveStatus = () => {
    statusField.current.style.display = 'none';
    status.current.style.display = 'inline';
    let text = statusArea.current.value;
    props.dispatch(addStatusActionCreator(text));
  };
  let changeStatus = (e) => {
    let text = e.target.value;
    props.dispatch(updateStatusActionCreator(text));
  };
  return (
    <div className={s.info}>
      <div className={s.avatar}>
        <img alt='avatar' src="https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/Cat4-430028.jpg" />
        <div className={s.description} > Soft Kitty
        <span onClick={setStatus} ref={status}>
            {props.status}
          </span>
          <div className={s.setStatus} ref={statusField} >
            <textarea onChange={changeStatus} value={props.status} ref={statusArea} />
            <button onClick={saveStatus}>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;