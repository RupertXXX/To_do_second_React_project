import React from 'react';
import { Field, reduxForm } from 'redux-form';
import c from './addNoteIs.module.css'

const AddNoteIsForm = (props) => {
    return <form className={c.main_form} onSubmit={props.handleSubmit}>
        <div>
            <Field className={c.description}  name={'description'} placeholder={'Your description'} component={'textarea'} />
        </div>
        {
            (props.error) &&
            <div className={c.mass_error}>
                {props.error}
            </div>
        }
        <button className={c.submit} name={'submit'}> Send </button>
    </form>
}

const AddNoteIsFormWithredux = reduxForm({
    form: 'addNote'
})(AddNoteIsForm);

const AddNoteIs = (props) => {

    const setNote = (formData) => {
        props.setNote(formData.description)
    };

    return <div className={c.main}>
        <div className={c.top}>
            <div></div>
            <div className={c.close} onClick={() => props.setMode((val) => !val)}>+</div>
        </div>
        <div className={c.title}>Add Note: </div>
        <AddNoteIsFormWithredux onSubmit={setNote} error={props.errors} />
    </div>
}

export default AddNoteIs;