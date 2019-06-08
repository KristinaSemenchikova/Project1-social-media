import React from 'react';
import { formValueSelector} from 'redux-form';
import { connect } from 'react-redux';
import Settings from './Settings';
import {  setProfileInfo } from './../../redux/profile-reducer';
import { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts , userInfoRequestStatus} from './../../redux/selectors';

let SettingsContainer = (props) => {
    debugger
    const submit = values => {
      console.log(values);
      props.setProfileInfo(values);
    }
    return (
        <Settings         
            userInfoRequestStatus = {props.userInfoRequestStatus}
            onSubmit={submit}
            initialValues={props} 
            job = {props.job}/>
    )
}
const mapStateToProps = (state) => {
    return ({
        fullName: fullName(state),
        aboutMe: aboutMe(state),
        lookingForAJob: lookingForAJob(state),
        lookingForAJobDescription: lookingForAJobDescription(state),
        contacts: contacts(state),
        userInfoRequestStatus : userInfoRequestStatus(state),
        job: formValueSelector('settings')(state,'lookingForAJob')
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        setProfileInfo : (values) => {
            dispatch(setProfileInfo(values))
        }
    }
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);


