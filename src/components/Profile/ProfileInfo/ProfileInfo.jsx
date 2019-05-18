import * as React from 'react';
import s from './ProfileInfo.module.scss';
import PropTypes from 'prop-types';
import Info from './Info/Info';
import StatusField from './ProfileStatusField/StatusField';

class ProfileInfo extends React.Component {
  render() {
    return (
      <div className={s.profileInfo}>
        <img alt='avatar' src="https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/Cat4-430028.jpg" />
        <div className={s.description} >
          <span className={s.name}> {this.props.info.fullName} </span>
          <StatusField 
            status={this.props.status}
            addStatus={this.props.addStatus}
            updateStatus={this.props.updateStatus} />
          <Info info={this.props.info} />
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
