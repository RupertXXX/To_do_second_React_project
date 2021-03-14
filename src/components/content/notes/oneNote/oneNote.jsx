import React, { useState } from 'react';
import c from './oneNote.module.css';
import yes from '../../../../assets/images/yes.png';
import no from '../../../../assets/images/no.svg';

const OneNote = (props) => {

    const [isComplete, setIsComplete] = useState(props.completed);

    const setComplete = (id) => {
        props.setComplete(id, true);
        setIsComplete((val) => !val);
    }
    const setIncomplete = (id) => {
        props.setComplete(id, false);
        setIsComplete((val) => !val);
    }

    return <>
        <div className={c.main}>
            <div className={c.top}>
                <div className={c.description}>{props.description}</div>
                {
                    isComplete
                    ?
                        <button className={c.set_completed} onClick={() => setIncomplete(props.id)}>Incompleted</button>
                    :
                        <button className={c.set_completed} onClick={() => setComplete(props.id)}>Completed</button>
                }
            </div>
            <div className={c.info}>
                <div className={c.date}>{props.date}</div>
                <div className={c.completed} > Completed: <img className={c.completed_img} src={props.completed ? yes : no} /> </div>
            </div>
        </div>
    </>
}

export default OneNote;