import React, { useState } from 'react';
import { InputText } from '../../../common/formControls/formControls';
import { Field, reduxForm, reset } from 'redux-form';
import { maxLengthCreator, required } from '../../../common/utils/validators/validators';
import c from './settings.module.css';

const maxLength50 = maxLengthCreator(50);

const SettingsForm = (props) => {
    return <form className={c.main_form} onSubmit={props.handleSubmit}>
        <div className={c.top_form}>
            <div>
                <Field className={c.name} validate={[required, maxLength50]} name={'name'} type={'text'} placeholder={'Name'} component={InputText} />
            </div>
            <div>
                <Field className={c.email} validate={[required, maxLength50]} name={'email'} type={'text'} placeholder={'Email'} component={InputText} />
            </div>
            {/* <div>
                <Field className={c.password} validate={[required, maxLength50]} name={'password'} type={'password'} placeholder={'Password'} component={InputText} />
            </div> */}
            <div>
                <Field className={c.age} validate={[required, maxLength50]} name={'age'} type={'text'} placeholder={'Age'} component={InputText} />
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

const SettingsFormWithRedux = reduxForm({
    form: 'changeProfile'
})(SettingsForm);

const Settings = (props) => {

    let [isDeleteMode, setIsDeleteMode] = useState(false);
    let [deleteCheck, setDeleteCheck] = useState("");

    const deleteUser = () => {
        if(deleteCheck === props.userData.name) props.deleteUser();
    }
    const updateUser = (formData, dispatch) => {
        props.updateUser(formData.name, formData.email, formData.password, formData.age);
        dispatch(reset('changeProfile'));
    }
    const imageChose = (e) => {
        if(e.target.files.length) props.setImage(e.target.files[0]);
    }

    return <>
        <div className={c.main}>
            <div>
                <div className={c.profile_title}>Profile</div>
                <div> Name: {props.userData.name} </div>
                <div> Age: {props.userData.age} </div>
                <div> Email: {props.userData.email} </div>
            </div>
            <div>
                <div className={c.profile_title}>Change profile</div>
                <SettingsFormWithRedux onSubmit={updateUser} />
            </div>
            <div>
                <div className={c.profile_title}>Download photo</div>
                <input onChange={imageChose} type="file" />
            </div>
            <button className={c.logout} onClick={() => props.logoutUser()}>Logout</button>
            {
                isDeleteMode
                ?
                    <div>
                        <div>
                            If you delete your account you will not be able to restore it!<br/>
                            If you really want to delete it enter your name to confirm:<br/>
                            <input onChange={(e) => setDeleteCheck(e.target.value)} type="text" placeholder="Your name" />
                        </div>
                        <div>
                            <button onClick={deleteUser}>Confirm</button>
                            <button onClick={() => setIsDeleteMode(val => !val)}>Cancel</button>
                        </div>
                    </div>
                :
                    <button className={c.deleteUser} onClick={() => setIsDeleteMode(val => !val)} >
                        Delete account
                    </button>
            }
        </div>
    </>
}

export default Settings;