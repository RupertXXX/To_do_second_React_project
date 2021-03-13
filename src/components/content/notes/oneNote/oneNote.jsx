import React from 'react';
import c from './oneNote.module.css';
import yes from '../../../../assets/images/yes.svg';
import no from '../../../../assets/images/no.svg';

const OneNote = (props) => {
    const setComplete = (id) => {
        props.setComplete(id);
    }

    return <>
        <div className={c.main}>
            <div className={c.description}>{props.description}</div>
            <div className={c.set_completed} onClick={() => setComplete(props.id)}>Completed</div>
            <div className={c.info}>
                <div className={c.date}>{props.date}</div>
                <div className={c.completed} > Completed: <img className={c.completed_img} src={props.completed ? yes : no} /> </div>
            </div>
        </div>
    </>
}

export default OneNote;