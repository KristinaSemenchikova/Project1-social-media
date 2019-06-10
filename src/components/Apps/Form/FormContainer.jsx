import React from 'react';
import { formValueSelector} from 'redux-form';
import { connect } from 'react-redux';
import Form from './Form';

let FormContainer = (props) => {
    const submit = values => {
      console.log(values);
    }
    return (
        <Form  
        onSubmit={submit}      
           />
    )
}
// const mapStateToProps = (state) => {
//     return ({
//         fullName: fullName(state),
//         aboutMe: aboutMe(state),
//         lookingForAJob: lookingForAJob(state),
//         lookingForAJobDescription: lookingForAJobDescription(state),
//         contacts: contacts(state),
//         userInfoRequestStatus : userInfoRequestStatus(state),
//         job: formValueSelector('settings')(state,'lookingForAJob')
//     })
// }
// const mapDispatchToProps = (dispatch) => {
//     return ({
//         setProfileInfo : (values) => {
//             dispatch(setProfileInfo(values))
//         }
//     }
//     )
// }
export default FormContainer;


