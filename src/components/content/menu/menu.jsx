import React from 'react';
import { NavLink } from  'react-router-dom';
import c from './menu.module.css';

const Menu = (props) => {
    return <>
        <div className={c.main}>
            <div className={c.title}>Menu</div>
            <div className={c.line}></div>
            <NavLink className={c.link} to="/notes">Notes</NavLink>
            <NavLink className={c.link} to="/incompleted">Incompleted notes</NavLink>
            <NavLink className={c.link} to="/completed">Completed notes</NavLink>
            <NavLink className={c.settings_link} to="/settings">Settings</NavLink>
        </div>
    </>
}

export default Menu;