import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
 display: grid;
  grid-template-columns: 20% 30%;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: ". ." ". ." ". ." ". .""   .";

`;
const Input = styled.input`
margin: 5px;
`;
const Span = styled.span`
font-size: 90%;
`;

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
            <span> Profile Settings </span>
            <Form>
                <Span> Name </Span>
                <Input type='text' onChange={onChangeName} value={props.name} />
                <Span> Date of birth</Span>
                <Input type='date' onChange={onChangeBirth} value={props.newBirthDate} />
                <Span> City </Span>
                <Input type='text' onChange={onChangeCity} value={props.city} />
                <Span> Contact</Span>
                <Input type='number' onChange={onChangeContact} value={props.contact} />
            </Form>
            <button onClick={props.addInfo}> Submit </button>
        </div>
    )
}
export default Settings;


