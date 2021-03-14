import React from 'react';
import MenuContainer from './menu/menuContainer';
import AddNoteContainer from './addNote/addNoteContainer';
import c from './content.module.css';

const Content = (props) => {
    return <>
        <div className={c.main}>
            <MenuContainer />
            {props.children}
        </div>
        <AddNoteContainer className={c.add_photo} />
    </>
}

export default Content;