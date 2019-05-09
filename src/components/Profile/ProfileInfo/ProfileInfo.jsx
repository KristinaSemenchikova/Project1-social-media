import * as React from 'react';
import s from './ProfileInfo.module.scss';
import PropTypes from 'prop-types';

class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    this.statusField = React.createRef();
    this.status = React.createRef();
    this.statusArea = React.createRef();
    this.setStatus = this.setStatus.bind(this);
    this.saveStatus = this.saveStatus.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }
  componentDidMount(){
    this.props.getProfileInfo(this.props.info.userId);
    console.log(this.props);
  }
  setStatus(e) {
    e.target.style.display = 'none';
    this.statusField.current.style.display = 'block';
  };
  saveStatus() {
    this.statusField.current.style.display = 'none';
    this.status.current.style.display = 'inline';
    this.props.addStatus(this.props.status);
  };
  changeStatus(e) {
    let text = e.target.value;
    this.props.updateStatus(text);
  };
  render() {
    return (
      <div className={s.profileInfo}>
        <img alt='avatar' src="https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/Cat4-430028.jpg" />
        <div className={s.description} >
          <span className={s.name}> {this.props.info.fullName} </span>
          <div className={s.status} onClick={this.setStatus} ref={this.status}>
            {this.props.status}
          </div>
          <div className={s.setStatus} ref={this.statusField} >
            <textarea onChange={this.changeStatus} value={this.props.status} ref={this.statusArea} />
            <button onClick={this.saveStatus}>Save</button>
          </div>
          <div className={s.info}>
            <span> About me: <span className={s.infoData}> {this.props.info.aboutMe} </span> </span>
            <span> Job: <span className={s.infoData}> {this.props.info.lookingForAJobDescription}</span> </span>
            <span> Contacts: <span className={s.infoData}>{this.props.info.contacts.facebook} </span>  </span>
          </div>
        </div>
      </div>
    )
  }

}
ProfileInfo.propTypes = {
  info: PropTypes.object,
  status: PropTypes.string,
  addStatus: PropTypes.func,
  updateStatus: PropTypes.func
};
export default ProfileInfo;
