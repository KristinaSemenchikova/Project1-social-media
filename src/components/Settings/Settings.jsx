import React from 'react';
import s from './Settings.module.scss';
import { Field, reduxForm } from 'redux-form'

const renderInput = field => {
    return (<div>
        <input {...field.input} type={field.type} />
        {field.meta.touched &&
            field.meta.error &&
            <span className="error">{field.meta.error}</span>}
    </div>)
};
let Settings = (props) => {
    const { handleSubmit } = props;
    return (
        <div className={s.settings}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='fullName'>Fullname</label>
                    <Field name='fullName' component={renderInput} type='text' />
                </div>
                <div>
                    <label htmlFor='aboutMe'>About me</label>
                    <Field name='aboutMe' component={renderInput} type='text' />
                </div>
                <div>
                    <label htmlFor="lookingForAJob">Looking for a job</label>
                    <Field
                        name="lookingForAJob"
                        id="lookingForAJob"
                        component={renderInput}
                        type="checkbox"
                    />
                </div>
                <div>
                    <label htmlFor='lookingForAJobDescription'>Looking for a job</label>
                    <Field name='lookingForAJobDescription' component={renderInput} type='text' />
                </div>
                <div>Contacts:</div>
                <div className={s.contactsField}>
                    <div>
                        <label htmlFor='facebook'>Facebook</label>
                        <Field name='facebook' component={renderInput} type='text' />
                    </div>
                    <div>
                        <label htmlFor='github'>Github</label>
                        <Field name='github' component={renderInput} type='text' />
                    </div>
                    <div>
                        <label htmlFor='instagram'>Instagram</label>
                        <Field name='instagram' component={renderInput} type='text' />
                    </div>
                    <div>
                        <label htmlFor='mail'>mail</label>
                        <Field name='mail' component={renderInput} type='text' />
                    </div>
                    <div>
                        <label htmlFor='twitter'>twitter</label>
                        <Field name='twitter' component={renderInput} type='text' />
                    </div>
                    <div>
                        <label htmlFor='vk'>vk</label>
                        <Field name='vk' component={renderInput} type='text' />
                    </div>
                    <div>
                        <label htmlFor='website'>website</label>
                        <Field name='website' component={renderInput} type='text' />
                    </div>
                    <div>
                        <label htmlFor='youtube'>youtube</label>
                        <Field name='youtube' component={renderInput} type='text' />
                    </div>
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Settings = reduxForm({
    form: 'settings'
})(Settings)

export default Settings;


