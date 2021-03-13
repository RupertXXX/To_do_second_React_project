import React, { useEffect } from 'react';
import OneNote from './oneNote/oneNote';
import Loading from '../../../common/loading/loading'
import c from './notes.module.css';

const Notes = (props) => {
    useEffect(() => {
        props.getNotes(0);
    }, []);

    const getNotes = () => {
        let notes = props.notes.map((el) => 
            <OneNote setComplete={props.setComplete} key={el._id} id={el._id} description={el.description} 
                date={el.date} completed={el.completed} />
        );
        return notes;
    }

    return <>
        <div className={c.main}>            
            { 
            props.notes.length > 0
            ?
                getNotes()
            :
                <Loading />
            }
        </div>
    </>
}

export default Notes;