import React from 'react';
import c from './addNoteLogo.module.css'

const AddNoteLogo = (props) => {
    return <div className={c.main} onClick={() => props.setMode((val) => !val)}>
        <div className={c.logo}>+</div>
    </div>
}

export default AddNoteLogo;