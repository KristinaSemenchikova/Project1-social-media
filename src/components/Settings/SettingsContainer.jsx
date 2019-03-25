import React, { Component } from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';
import {changeNameActionCreator,changeBirthActionCreator,changeContactActionCreator, changeCityActionCreator,addInfoActionCreator} from './../../redux/profile-reducer';

const SettingsContainer = (props) => {
    
    return (
       <Settings 
       name = {props.name}
       birthdayDate = {props.birthdayDate}
       city = {props.city}
       contact = {props.contact} 
       changeBirth = {props.changeBirth}
       changeName = {props.changeName}
       changeCity = {props.changeCity}
       changeContact = {props.changeContact}
       addInfo = {props.addInfo}
       />
    )
}
const mapStateToProps = (state) => {
    return ( {
        name: state.profilePage.newName,
        birthdayDate: state.profilePage.newBirthDate,
        city: state.profilePage.profileInfo.newCity,
        contact: state.profilePage.profileInfo.newContact,   
    } )
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
            dispatch (addInfoActionCreator())
        }
    }
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);


