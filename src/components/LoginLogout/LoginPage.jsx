import React from 'react';
import s from './Login.module.scss';
import { Redirect } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { Field, reduxForm } from 'redux-form'

const renderInput = field => {
    return (<div>
        {field.meta.error
            ? <input {...field.input} type={field.type} className={s.error} placeholder = {field.meta.error}/>
            : <input {...field.input} type={field.type} />
        }
    </div>)
};
const validate = values => {
    const errors = {}
    if (!values.login) {
        errors.login = 'Login is required'
    }
    if (!values.password) {
        errors.password = 'Password  is required'
    }
    return errors
}

let Login = (props) => {
    const { handleSubmit, submitting} = props;
    let setCaptchaValue = (e) => props.setCaptchaValue(e.target.value);
    return (
        <div>
            {props.isLogin && <Redirect to='/profile' />}
            <form onSubmit={handleSubmit} className={s.logIn}>
                <label htmlFor  = 'login'>Login</label>
                <Field name = 'login'  component={renderInput} type='login' />
                <label htmlFor  = 'password'> Password</label>
                <Field name = 'password'  component={renderInput} type='password' />
                <label>Remember me <Field name = 'rememberMe' type='checkbox' component={renderInput}/></label>
                {props.loginRequest.status === 'IN_PROGRESS'              
                    ? <Preloader />                   
                : <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                  </div>}
            </form>
            {props.captcha.isCaptchaRequired && <div>
                <img src={props.captcha.captchaUrl} />
                <input type='text' value={props.captcha.captchaAValue} onChange={setCaptchaValue} />
            </div>}
          
        </div>
    )
}
Login = reduxForm({
    form: 'login',
    validate
})(Login)

export default Login;

// {props.isLogin && <Redirect to='/profile' />}
// <form onSubmit={handleSubmit} className={s.logIn}>
//     <span>Login</span>
//     <input onChange={setLogin} value={props.authData.login} type='login' />
//     <span> Password</span>
//     <input onChange={setPassword} value={props.authData.password} type='password' />
//     <label>Remember me<input type='checkbox' onChange={toggleRememberMe} checked={props.authData.rememberMe} /></label>
// </form>
// {props.captcha.isCaptchaRequired && <div>
//     <img src={props.captcha.captchaUrl} />
//     <input type='text' value={props.captcha.captchaAValue} onChange={setCaptchaValue} />
// </div>}
// {props.loginRequest.status === 'IN_PROGRESS'
//     ? <Preloader />
//     : <button onClick={toLogIn}> Login </button>}
