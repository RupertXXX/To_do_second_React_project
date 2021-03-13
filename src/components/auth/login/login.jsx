import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Redirect} from 'react-router-dom';
import c from './login.module.css';

const LoginForm = (props) => {
    return <form className={c.main_form} onSubmit={props.handleSubmit}>
        <div>
            <Field className={c.email} name={'email'} type={'email'} placeholder={'E-mail'} component={'input'} />
        </div>
        <div>
            <Field className={c.password} name={'password'} type={'password'} placeholder={'password'} component={'input'} />
        </div>
        {
            (props.error) &&
            <div className={c.mass_error}>
                {props.error}
            </div>
        }
        <div>
            <button className={c.login} name={'submit'}> Send </button>
        </div>
    </form>
}

const LoginFormWithRedux = reduxForm({
    form: 'register'
})(LoginForm);

const Login = (props) => {
    const login = (formData) => {
        props.loginUser(formData.email, formData.password);
    }
    return <div className={c.main}>
        {
            !props.isLogin 
            ? 
                <div className={c.almost_main}>
                    <div className={c.title}>Login</div>
                    <LoginFormWithRedux onSubmit={login} error={props.errors}/>
                </div>
            :
                <Redirect to="/notes" />
        }
        {/* <button onClick={() => props.logoutUser()}>logout</button> */}
    </div>
}

export default Login;