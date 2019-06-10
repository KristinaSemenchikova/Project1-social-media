import React from 'react';
import style from './Form.module.scss';
import { Field, reduxForm, FieldArray } from 'redux-form';

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
                    ? <input {...input} placeholder={label} type={type} placeholder={error} className = {style.error}/>
                    : <input {...input} placeholder={label} type={type} />
                }
            </div>
        </div>
    )
const required = value => (value || typeof value === 'number' ? undefined : 'Required');


let Form = (props) => {
    const { handleSubmit } = props;
    return (
        <div className = {style.studentsForm}>
            <form onSubmit={handleSubmit} className={style.formArea} >
                <FieldArray name='members' component={studentsList} />
            </form>
        </div>
    )
}
const studentsList = (props) => {
    return <div>
        <div className={style.addButton}>
            <button onClick={() => props.fields.push({})}>Add member</button>
            <button type='submit'>Sumbit</button>
        </div>
        {props.fields.map((s, i) => {
            return <div className={style.memberArea} key={i}>
                <div className={style.field}>
                    <span> Name: </span>
                    <Field validate={[required]} name={s + '.firstname'} component={renderField} type='text' placeholder='name' />
                    <a onClick={() => props.fields.remove(i)}><img src="https://img.icons8.com/ios/50/000000/cancel.png" /></a>
                </div>
                <div>
                    <FieldArray name={s + '.technologies'} component={studentsTech} />
                </div>
            </div>
        })}
    </div>
}
const studentsTech = (props) => {
    return <div className={style.techArea}>
        <div className={style.addButton}>
            <button onClick={() => props.fields.push({})}>Add technology</button>
        </div>
        {props.fields.map((s, i) => {
            return <div className={style.field} key={i}>
                <span> Technology: </span>
                <Field validate={[required]} name={s + '.technology'} component={renderField} type='text' placeholder='tech' />
                <a onClick={() => props.fields.remove(i)}><img src="https://img.icons8.com/ios/50/000000/cancel.png" /></a>
            </div>
        })}
    </div>
}
Form = reduxForm({
    form: 'students-form',
})(Form)

export default Form;



