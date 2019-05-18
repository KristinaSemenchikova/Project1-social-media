import React from 'react';
import { connect } from 'react-redux';
import { photo } from '../../redux/selectors';
import EditProfile from './EditProfile';
import { uploadPhoto } from '../../redux/profile-reducer';


let EditProfileContainer = (props) => {   
    return (
        <EditProfile
           photo = {props.photo}
           upload = {props.upload} />
    )
}
const mapStateToProps = (state) => {
    return ({
        photo: photo(state)
    })
}
const mapDispatchToProps = dispatch => {
    return {
        upload : (photo) => {
            dispatch(uploadPhoto(photo))
        },
          
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditProfileContainer);


