import * as React from 'react';
import PropTypes from 'prop-types';
import s from '../ProfileInfo.module.scss';

class StatusField extends React.Component {
  constructor(props) {
    super(props);
    this.statusField = React.createRef();
    this.status = React.createRef();
    this.statusArea = React.createRef();
    this.setStatus = this.setStatus.bind(this);
    this.saveStatus = this.saveStatus.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
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
      <div>
          <div className={s.status} onClick={this.setStatus} ref={this.status}>
            {this.props.status}
          </div>
          <div className={s.setStatus} ref={this.statusField} >
            <textarea onChange={this.changeStatus} value={this.props.status} ref={this.statusArea} />
            <button onClick={this.saveStatus}>Save</button>
          </div>         
        </div>
    )
  }

}
StatusField.propTypes = {
  status: PropTypes.string,
  addStatus: PropTypes.func,
  updateStatus: PropTypes.func
};
export default StatusField;
