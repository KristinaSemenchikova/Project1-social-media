import React from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';
import { changeNameActionCreator, changeBirthActionCreator, changeContactActionCreator, changeCityActionCreator, addInfoActionCreator } from './../../redux/profile-reducer';
import { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } from './../../redux/selectors';
import instance from '../../Service/Service';

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
        instance.post('profile',
            {

                "aboutMe": values,
                "contacts": {
                    facebook: "facebook.com",
                    github: "github.com",
                    instagram: "instagra.com/sds",
                    mainLink: null,
                    twitter: "https://twitter.com/@sdf",
                    vk: "vk.com/dimych",
                    website: null,
                    youtube: null
                },
                "lookingForAJob": true,
                "lookingForAJobDescription": 'не ищу',
                "fullName": "samurai d"
            }
        )
    }
    return (
        //     <Settings 
        //    name = {props.name}
        //    birthdayDate = {props.birthdayDate}
        //    city = {props.city}
        //    contact = {props.contact} 
        //    changeBirth = {props.changeBirth}
        //    changeName = {props.changeName}
        //    changeCity = {props.changeCity}
        //    changeContact = {props.changeContact}
        //    addInfo = {props.addInfo}
        //    />

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
        changeName: (text) => {
            dispatch(changeNameActionCreator(text))
        },
        changeBirth: (text) => {
            dispatch(changeBirthActionCreator(text))
        },
        changeCity: (text) => {
            dispatch(changeCityActionCreator(text))
        },
        changeContact: (text) => {
            dispatch(changeContactActionCreator(text))
        },
        addInfo: () => {
            dispatch(addInfoActionCreator())
        }
    }
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);


