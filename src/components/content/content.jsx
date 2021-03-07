import React from 'react';
import Menu from './menu/menu';
import AddNote from './addNote/addNote';
import c from './content.module.css';

const Content = (props) => {
    return <>
        <div className={c.main}>
            <Menu />
            {props.children}
        </div>
        <AddNote />
    </>
}

export default Content;