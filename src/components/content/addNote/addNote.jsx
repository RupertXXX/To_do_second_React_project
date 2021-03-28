import React, { useState, useEffect } from 'react';
// import Loading from '../../../common/loading/loading'
import AddNoteLogo from './addNoteLogo/addNoteLogo';
import AddNoteIs from './addNoteIs/addNoteIs';
// import c from './addNote.module.css';

const AddNote = (props) => {

    let [addMode, setAddMode] = useState(props.notesIsEmpty);
    useEffect(() => {
        setAddMode(props.notesIsEmpty);
    }, [props.notesIsEmpty]);

    return <>
        {
            addMode 
            ?
                <AddNoteIs setMode={setAddMode} {...props} />
            :
                <AddNoteLogo setMode={setAddMode} />
        }
    </>
}

export default AddNote;