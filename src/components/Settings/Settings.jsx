import React from 'react';
import s from './Settings.module.scss';
import { Field, reduxForm } from 'redux-form';
import Preloader from '../Preloader/Preloader';


const renderField = ({
    input,
    label,
    type,
    meta: { touched, error }
}) => (
        <div>
            <label>{label}</label>
            <div>
                {error && touched
                    ? <input {...input} placeholder={label} type={type} className={s.error} placeholder={error} />
                    : <input {...input} placeholder={label} type={type} />
                }
            </div>
        </div>
    )

const required = value => (value || typeof value === 'number' ? undefined : 'Required');


let Settings = (props) => {
    let contacts = Object.keys(props.initialValues.contacts).map(el => <Field
        key={`contacts.${el}`}
        validate={[required]}
        name={`contacts.${el}`}
        label={el}
        component={renderField}
        type='text' />);
    const { handleSubmit, submitting } = props;
    return (
        <div className={s.settings}>
            <form onSubmit={handleSubmit}>

                <Field label='Fullname' name='fullName' component={renderField} type='text'  validate={[required]} />

                <Field label='About me' name='aboutMe' component={renderField} type='text'  validate={[required]} />

                <Field
                    label='Looking for a job'
                    name='lookingForAJob'
                    component={renderField}
                    type='checkbox'               
                />
                {props.job && <Field
                    label='Looking for a job description'
                    name='lookingForAJobDescription'
                    component={renderField}
                    type='text' 
                    />
                }

                <div>Contacts:</div>
                <div className={s.contactsField}>
                    {contacts}
                </div>

                <div className = {s.sumbitButton}>
                    {props.userInfoRequestStatus === 'IN_PROGRESS'
                        ? <Preloader />
                        : <button type="submit" disabled={submitting}>Submit</button>}
                </div>
            </form>
        </div>
    )
}

Settings = reduxForm({
    form: 'settings',
})(Settings)

export default Settings;



