import React from 'react';
import { Field, reduxForm } from 'redux-form'
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
            <Field className={c.password}  name={'password'} type={'password'} placeholder={'password'} component={'input'} />
        </div>
        <div>
            Age: 
            <Field className={c.age} name={'age'} type={'number'} component={'input'} />
        </div>
        {
            (props.error) &&
            <div className={c.mass_error}>
                {props.error}
            </div>
        }
        <div>
            <button className={c.btn} name={'submit'} >Send</button>
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
    return <>
        <div>Registry</div>
        <RegisterFormWithRedux onSubmit={registry} />
    </>
}

export default Register;