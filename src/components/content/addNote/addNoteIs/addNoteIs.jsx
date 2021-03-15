import React from 'react';
import { Textarea } from '../../../../common/formControls/formControls';
import { Field, reduxForm, reset } from 'redux-form';
import { maxLengthCreator } from '../../../../common/utils/validators/validators';
import c from './addNoteIs.module.css'

const maxLength1000 = maxLengthCreator(1000);

const AddNoteIsForm = (props) => {
    return <form className={c.main_form} onSubmit={props.handleSubmit}>
        <div>
            <Field className={c.description} validate={[maxLength1000]} name={'description'} placeholder={'Your description'} component={Textarea} />
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

    const setNote = (formData, dispatch) => {
        props.setNote(formData.description);
        dispatch(reset('addNote'));
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