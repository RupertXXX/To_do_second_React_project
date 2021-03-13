import React from 'react';
import Menu from './menu/menu';
import AddNoteContainer from './addNote/addNoteContainer';
import c from './content.module.css';

const Content = (props) => {
    return <>
        <div className={c.main}>
            <Menu />
            {props.children}
        </div>
        <AddNoteContainer className={c.add_photo} />
    </>
}

export default Content;