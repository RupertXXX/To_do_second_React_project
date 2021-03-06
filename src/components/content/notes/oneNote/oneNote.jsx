import React from 'react';
import c from './oneNote.module.css';

const OneNote = (props) => {
    return <>
        <div className={c.main}>
            <div className={c.text}>{props.text}</div>
            <div className={c.info}>
                <div className={c.date}>{props.date}</div>
                <div className={c.urgency} >Urgency: {props.urgency}</div>
            </div>
        </div>
    </>
}

export default OneNote;