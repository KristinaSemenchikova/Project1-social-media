import React, { Component } from 'react';
import s from './Settings.module.css';

const Settings = (props) => {
    let onChangeName = (e) => {
        let text = e.target.value;
        props.changeName(text)   
    };
    let onChangeBirth = (e) => {
        let text = e.target.value;
        props.changeBirth(text)   
    };
    let onChangeCity = (e) => {
        let text = e.target.value;
        props.changeCity(text)   
    };
    let onChangeContact = (e) => {
        let text = e.target.value;
        props.changeContact(text)   
    };
    return (
        <div>
            <div className={s.editProfile}>
                <span> Profile Settings </span>
                <form className={s.editInfo}>
                    <span> Name</span>
                    <input type='text' onChange = {onChangeName} value = {props.name}/>
                    <span> Date of birth</span>
                    <input type='date' onChange = {onChangeBirth} value = {props.newBirthDate}/>
                    <span> City </span>
                    <input type='text' onChange = {onChangeCity} value = {props.city}/>
                    <span> Contact</span>
                    <input type='number' onChange = {onChangeContact} value = {props.contact}/>
                </form>
                <button onClick = {props.addInfo}> Submit </button>
            </div>
        </div>
    )
}
export default Settings;
