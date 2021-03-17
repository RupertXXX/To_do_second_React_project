import React, { useEffect, useState } from 'react';
import c from './oneNote.module.css';
import yes from '../../../../assets/images/yes.png';
import no from '../../../../assets/images/no.svg';
import trash from '../../../../assets/images/trash.svg';

const OneNote = (props) => {

    const [isComplete, setIsComplete] = useState(props.completed);
    const [isDeleteMode, setIsDeleteMode] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        setIsDisabled(false)
    }, [props.completed])

    const setComplete = () => {
        setIsDisabled(true);
        props.setComplete(props.id, true);
        setIsComplete((val) => !val);
    }
    const setIncomplete = () => {
        setIsDisabled(true);
        props.setComplete(props.id, false);
        setIsComplete((val) => !val);
    }
    const deleteNote = () => {
        props.deleteNote(props.id);
    }

    return <>
        
        <div className={c.main}>
            <div className={c.description}>{props.description}</div>
            <div className={c.bottom}>
                <div className={c.buttons}>
                    {
                        isDeleteMode
                        ?
                            <div>Delete note? 
                                <span className={c.delete_choose} onClick={deleteNote}>Yes</span>
                                <span className={c.delete_choose} onClick={() => setIsDeleteMode(val => !val)} >Cancel</span>
                            </div>
                        :
                            <div className={c.trash} onClick={() => setIsDeleteMode(val => !val)} >
                                <img className={c.trash_is} src={trash} alt="trash can" />
                            </div>
                    }
                    {
                        isComplete
                        ?
                            <button disabled={isDisabled ? true : false} className={c.set_incompleted} onClick={setIncomplete}>Incomplete</button>
                        :
                            <button disabled={isDisabled ? true : false} className={c.set_completed} onClick={setComplete}>Complete</button>
                    }
                </div>
                <div className={c.info}>
                    <div className={c.date}>{props.date}</div>
                    <div className={c.completed} > Completed: <img className={c.completed_img} src={props.completed ? yes : no} alt={props.completed ? "yes" : "no"} /> </div>
                </div>
            </div>
        </div>
    </>
}

export default OneNote;