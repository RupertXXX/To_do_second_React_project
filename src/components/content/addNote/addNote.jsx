import React, { useState } from 'react';
import AddNoteLogo from './addNoteLogo/addNoteLogo';
import AddNoteIs from './addNoteIs/addNoteIs';
import c from './addNote.module.css';

const AddNote = (props) => {
    let [addMode, setAddMode] = useState(false);

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