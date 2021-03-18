import React, { useState } from 'react';
import { InputText } from '../../../common/formControls/formControls';
import { Field, reduxForm, reset } from 'redux-form';
import { maxLengthCreator } from '../../../common/utils/validators/validators';
import c from './settings.module.css';

const maxLength50 = maxLengthCreator(50);
const maxLength10 = maxLengthCreator(10);
const maxLength30 = maxLengthCreator(30);

const SettingsForm = (props) => {
    return <form className={c.main_form} onSubmit={props.handleSubmit}>
        <div className={c.top_form}>
            <div>
                <Field className={c.name} validate={[maxLength50]} name={'name'} type={'text'} placeholder={'Name'} component={InputText} />
            </div>
            <div>
                <Field className={c.email} validate={[maxLength50]} name={'email'} type={'text'} placeholder={'Email'} component={InputText} />
            </div>
            <div>
                <Field className={c.password} validate={[maxLength30]} name={'password'} type={'password'} placeholder={'Password'} component={InputText} />
            </div>
            <div>
                <Field className={c.age} validate={[maxLength10]} name={'age'} type={'text'} placeholder={'Age'} component={InputText} />
            </div>
            {
                (props.error) &&
                <div className={c.mass_error}>
                    {props.error}
                </div>
            }
        </div>
        <div>
            <button className={c.update} name={'submit'}> Send </button>
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
    // const imageChose = (e) => {
    //     if(e.target.files.length) props.setImage(e.target.files[0]);
    // }

    return <>
        <div className={c.main}>
            <div className={c.title}>Profile</div>
            <div className={c.profile}>
                <div className={c.profile_text}> Name: {props.userData.name} </div>
                <div className={c.profile_text}> Age: {props.userData.age} </div>
                <div className={c.profile_text}> Email: {props.userData.email} </div>
            </div>
            <div className={c.title}>Change profile</div>
            <div className={c.change_profile}>
                <SettingsFormWithRedux onSubmit={updateUser} />
            </div>
            {/* <div>
                <div className={c.title}>Download photo</div>
                <input onChange={imageChose} type="file" />
            </div> */}
            <div className={c.title}>Logout</div>
            <div className={c.logout}>
                <button className={c.logout_is} onClick={() => props.logoutUser()}>Logout</button>
            </div>
            <div className={c.title}>Delete account</div>
            <div className={c.delete}>
                <div className={c.delete_text}>If you delete your account you will not be able to restore it!<br/></div>
                {
                    isDeleteMode
                    ?
                        <div>
                            <div className={c.delete_enter}>
                                If you really want to delete it enter your name to confirm:<br/>
                                <input className={c.delete_enter} onChange={(e) => setDeleteCheck(e.target.value)} type="text" placeholder="Your name" />
                            </div>
                            <div>
                                <button className={c.delete_confirm} onClick={deleteUser}>Confirm</button>
                                <button className={c.delete_cancel} onClick={() => setIsDeleteMode(val => !val)}>Cancel</button>
                            </div>
                        </div>
                    :
                        <button className={c.deleteUser} onClick={() => setIsDeleteMode(val => !val)} >
                            Delete account
                        </button>
                }
            </div>
        </div>
    </>
}

export default Settings;