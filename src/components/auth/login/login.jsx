import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Redirect} from 'react-router-dom';
import c from './login.module.css';

const LoginForm = (props) => {
    return <form className={c.main_form} onSubmit={props.handleSubmit}>
        <div>
            <Field className={c.email}  name={'email'} type={'email'} placeholder={'E-mail'} component={'input'} />
        </div>
        <div>
            <Field className={c.password}  name={'password'} type={'password'} placeholder={'password'} component={'input'} />
        </div>
        {
            (props.error) &&
            <div className={c.mass_error}>
                {props.error}
            </div>
        }
        <div>
            <button className={c.btn} name={'submit'}> Send </button>
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
    return <>
        {
            !props.isLogin 
            ? 
                <>
                    <div>Login</div>
                    <LoginFormWithRedux onSubmit={login} />
                </>
            :
                <Redirect to="/notes" />
        }
        <button onClick={() => props.logoutUser()}>logout</button>
    </>
}

export default Login;