import React from 'react';
import { InputText } from '../../../common/formControls/formControls';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../common/utils/validators/validators';
import { Redirect, NavLink } from 'react-router-dom';
import c from './register.module.css';

const maxLength30 = maxLengthCreator(30);
const maxLength50 = maxLengthCreator(50);
const maxLength10 = maxLengthCreator(10);

const RegisterForm = (props) => {
    return <form className={c.main_form} onSubmit={props.handleSubmit}>
        <div className={c.top_form}>
            <div>
                <Field className={c.name} validate={[required, maxLength50]} name={'name'} type={'text'} placeholder={'Name'} component={InputText} />
            </div>
            <div>
                <Field className={c.email} validate={[required, maxLength50]} name={'email'} type={'email'} placeholder={'E-mail'} component={InputText} />
            </div>
            <div>
                <Field className={c.password} validate={[required, maxLength30]} name={'password'} type={'password'} placeholder={'Password'} component={InputText} />
            </div>
            <div>
                <Field className={c.age} validate={[required, maxLength10]} name={'age'} type={'text'} placeholder={'Age'} component={InputText} />
            </div>
            {
                (props.error) &&
                <div className={c.mass_error}>
                    {props.error}
                </div>
            }
        </div>
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