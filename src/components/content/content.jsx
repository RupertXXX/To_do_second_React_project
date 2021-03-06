import React from 'react';
import Menu from './menu/menu';
import AddNote from './addNote/addNote';

const Content = (props) => {
    return <>
        <Menu />
        {props.children}
        <AddNote />
    </>
}

export default Content;