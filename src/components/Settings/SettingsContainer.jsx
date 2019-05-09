import React from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';
import {  setProfileInfo } from './../../redux/profile-reducer';
import { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } from './../../redux/selectors';

let SettingsContainer = (props) => {
    let fullName = props.fullName;
    let lookingForAJob = props.lookingForAJob;
    let lookingForAJobDescription = props.lookingForAJobDescription;
    let aboutMe = props.aboutMe;
    let facebook = props.contacts.facebook;
    let github = props.contacts.github;
    let instagram = props.contacts.instagram;
    let mail = props.contacts.mailLink;
    let twitter = props.contacts.twitter;
    let vk = props.contacts.vk;
    let website = props.contacts.website;
    let youtube = props.contacts.youtube;

    const submit = values => {
      props.setProfileInfo(values);
    }
    return (
        <Settings
            onSubmit={submit}
            initialValues={{
                fullName, aboutMe, lookingForAJob, lookingForAJobDescription,
                facebook, github, instagram, mail, twitter,
                vk, website, youtube
            }} />
    )
}
const mapStateToProps = (state) => {
    return ({
        fullName: fullName(state),
        aboutMe: aboutMe(state),
        lookingForAJob: lookingForAJob(state),
        lookingForAJobDescription: lookingForAJobDescription(state),
        contacts: contacts(state),
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


