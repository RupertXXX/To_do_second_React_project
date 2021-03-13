import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect, NavLink } from 'react-router-dom';
import c from './register.module.css';

const RegisterForm = (props) => {
    return <form className={c.main_form} onSubmit={props.handleSubmit}>
        <div>
            <Field className={c.name}  name={'name'} type={'text'} placeholder={'Name'} component={'input'} />
        </div>
        <div>
            <Field className={c.email}  name={'email'} type={'email'} placeholder={'E-mail'} component={'input'} />
        </div>
        <div>
            <Field className={c.password}  name={'password'} type={'password'} placeholder={'Password'} component={'input'} />
        </div>
        <div>
            <Field className={c.age} name={'age'} type={'text'} placeholder={'Age'} component={'input'} />
        </div>
        {
            (props.error) &&
            <div className={c.mass_error}>
                {props.error}
            </div>
        }
        <div>
            <button className={c.register} name={'submit'} >Send</button>
        </div>
    </form>
}

const RegisterFormWithRedux = reduxForm({
    form: 'register'
})(RegisterForm);

const Register = (props) => {
    const registry = (formData) => {
        props.registerUser(formData.name, formData.email, formData.password, formData.age);
    }
    return <div className={c.main}>
        {
            !props.isLogin 
            ? 
                <div className={c.almost_main}>
                    <div className={c.title}>Registry</div>
                    <RegisterFormWithRedux onSubmit={registry} />
                    <NavLink className={c.login} to="/login">Login</NavLink>
                </div>
            :
                <Redirect to="/notes" />
        }
    </div>
}

export default Register;