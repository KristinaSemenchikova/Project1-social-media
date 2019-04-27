import React, {Component} from 'react';
import s from './Login.module.css';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.toLogIn = this.toLogIn.bind(this);
        this.setLogin = this.setLogin.bind(this);
        this.setPassword = this.setPassword.bind(this)
    }
    toLogIn(){
        axios.post('https://social-network.samuraijs.com/api/1.0/auth/login',
            {
                params: {
                   email: this.props.authData.login,
                   password: this.props.authData.password,
                   rememberMe : true
                },
                headers: {
                    'API-KEY': '9c388cc8-6b6d-4685-a997-629e8579dc3f'
                 }
            })
            .then( result => {
                console.log(result);
                this.props.toLogIn();  
            })
    }
    setLogin(e){
        let login = e.target.value;
        this.props.setLogin(login)
    }
    setPassword(e){
        let password = e.target.value;
        this.props.setPassword(password)
    }
    render() {
        return (
            <div>
                    <form className={s.logIn}>
                        <span>Login</span>
                        <input onChange  = {this.setLogin} value = {this.props.authData.login} type='login'/>
                        <span> Password</span>
                        <input onChange= {this.setPassword} value = {this.props.authData.password} type='password'/>
                    </form>
                    <button onClick = {this.toLogIn}> Login </button>
            </div>
        )
    }   
}
export default Login;
