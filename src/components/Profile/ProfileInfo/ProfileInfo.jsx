import React from 'react';
import s from './ProfileInfo.module.scss';
import PropTypes from 'prop-types';

const ProfileInfo = (props) => {
  let statusField = React.createRef();
  let status = React.createRef();
  let statusArea = React.createRef();
  let setStatus = (e) => {
    e.target.style.display = 'none';
    statusField.current.style.display = 'block';   
  };
  let saveStatus = () => {
    statusField.current.style.display = 'none';
    status.current.style.display = 'inline';
    let text = statusArea.current.value;
    props.addStatus(text);
  };
  let changeStatus = (e) => {
    let text = e.target.value;
    props.updateStatus(text);
  };
  return (
    <div className={s.profileInfo}>
      <img alt='avatar' src="https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/Cat4-430028.jpg" />
      <div className={s.description} >
        <span className={s.name}> {props.info.fullName} </span>
        <div className={s.status} onClick={setStatus} ref={status}>
          {props.status}
        </div>
        <div className={s.setStatus} ref={statusField} >
          <textarea onChange={changeStatus} value={props.status} ref={statusArea} />
          <button onClick={saveStatus}>Save</button>
        </div>
        <div className={s.info}>
          <span> About me: <span className={s.infoData}> {props.info.aboutMe} </span> </span>
          <span> lookingForAJobDescription: <span className={s.infoData}> {props.info.lookingForAJobDescription}</span> </span>
          <span> Contacts: <span className={s.infoData}>{props.info.contacts.vk} </span>  </span>
        </div>
      </div>
    </div>
  )
}
ProfileInfo.propTypes = {
  info: PropTypes.object,
  status: PropTypes.string,
  addStatus: PropTypes.func,
  updateStatus: PropTypes.func
};
export default ProfileInfo;
