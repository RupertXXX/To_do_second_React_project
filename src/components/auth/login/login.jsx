import React from 'react';
import { InputText } from '../../../common/formControls/formControls';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../common/utils/validators/validators';
import { Redirect, NavLink } from 'react-router-dom';
import c from './login.module.css';

const maxLength30 = maxLengthCreator(30);
const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
    return <form className={c.main_form} onSubmit={props.handleSubmit}>
        <div className={c.top_form}>
            <div>
                <Field className={c.email} validate={[required, maxLength50]} name={'email'} type={'email'} placeholder={'E-mail'} component={InputText} />
            </div>
            <div>
                <Field className={c.password} validate={[required, maxLength30]} name={'password'} type={'password'} placeholder={'password'} component={InputText} />
            </div>
            {
                (props.error) &&
                <div className={c.mass_error}>
                    {props.error}
                </div>
            }
            </div>
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
                    <NavLink className={c.register} to="/register">Register</NavLink>
                </div>
            :
                <Redirect to="/notes" />
        }
    </div>
}

export default Login;