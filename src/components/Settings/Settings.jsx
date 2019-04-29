import React from 'react';
import styled from 'styled-components';
import {Field, reduxForm} from 'redux-form'

// const Form = styled.form`
//  display: grid;
//   grid-template-columns: 20% 30%;
//   grid-template-rows: 1fr 1fr 1fr 1fr;
//   grid-template-areas: ". ." ". ." ". ." ". .""   .";

// `;
// const Input = styled.input`
// margin: 5px;
// `;
// const Span = styled.span`
// font-size: 90%;
// `;

// const Settings = (props) => {
//     let onChangeName = (e) => {
//         let text = e.target.value;
//         props.changeName(text)
//     };
//     let onChangeBirth = (e) => {
//         let text = e.target.value;
//         props.changeBirth(text)
//     };
//     let onChangeCity = (e) => {
//         let text = e.target.value;
//         props.changeCity(text)
//     };
//     let onChangeContact = (e) => {
//         let text = e.target.value;
//         props.changeContact(text)
//     };
//     return (
//         <div>
//             <span> Profile Settings </span>
//             <Form>
//                 <Span> Name </Span>
//                 <Input type='text' onChange={onChangeName} value={props.name} />
//                 <Span> Date of birth</Span>
//                 <Input type='date' onChange={onChangeBirth} value={props.newBirthDate} />
//                 <Span> City </Span>
//                 <Input type='text' onChange={onChangeCity} value={props.city} />
//                 <Span> Contact</Span>
//                 <Input type='number' onChange={onChangeContact} value={props.contact} />
//             </Form>
//             <button onClick={props.addInfo}> Submit </button>
//         </div>
//     )
// }
// export default Settings;
const renderInput = field =>  {
   return  (<div>
    <input {...field.input} type={field.type}/>  
    {field.meta.touched &&
     field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>)
};
let Settings = (props) => {
    debugger
   const {handleSubmit} = props;
    return (
        <>
            <form onSubmit = {handleSubmit}>
               <div>
                   <label htmlFor = 'name'>Name</label>
                   <Field name ='name' component={renderInput} type = 'text'/>
               </div>
               <div>
                   <label htmlFor = 'dateOfBirth'>Date of birth</label>
                   <Field name ='dateOfBirth' component={renderInput} type = 'date'/>
               </div>
               <div>
                   <label htmlFor = 'city'>City</label>
                   <Field name ='city' component={renderInput} type = 'text'/>
               </div>
               <div>
                   <label htmlFor = 'contact'>Contact</label>
                   <Field name ='contact' component={renderInput} type = 'number'/>
               </div>
               <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

Settings = reduxForm({
    // a unique name for the form
    form: 'settings'
  })(Settings)
  
  export default Settings;


