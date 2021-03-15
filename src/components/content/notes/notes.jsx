import React from 'react';
import OneNote from './oneNote/oneNote';
import Loading from '../../../common/loading/loading'
import Paginator from './paginator/paginator';
import c from './notes.module.css';

const Notes = (props) => {

    const getNotes = () => {
        let notes = props.notes.map((el) => 
            <OneNote setComplete={props.setComplete} deleteNote={props.deleteNote} 
                key={el._id} id={el._id} description={el.description} date={el.date} completed={el.completed} />
        );
        return notes;
    }

    return <>
        <div className={c.main}>
            { 
                props.notes[0] === 'test' || props.isLoading
                ?
                    <Loading />
                :
                    <div className={c.premain}>
                        <Paginator currentPage={props.currentPage} count={props.count} pageSize={props.pageSize} 
                            portionSize={props.portionSize} setCurrentPage={props.setCurrentPage} />
                        <div className={c.line}></div>
                        <div className={c.notes}> 
                            {getNotes()}
                        </div>
                    </div>
            }
        </div>
    </>
}

export default Notes;