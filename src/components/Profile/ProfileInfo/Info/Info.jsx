import * as React from 'react';
import PropTypes from 'prop-types';
import s from '../ProfileInfo.module.scss';

class Info extends React.Component {
  render() {
    return (
          <div className={s.info}>
            <span> About me: <span className={s.infoData}> {this.props.info.aboutMe} </span> </span>
            <span> Job: <span className={s.infoData}> {this.props.info.lookingForAJobDescription}</span> </span>
            <span> Contacts: <span className={s.infoData}>{this.props.info.contacts.facebook} </span>  </span>
          </div>
    )
  }

}
Info.propTypes = {
  info: PropTypes.object,
};
export default Info;
