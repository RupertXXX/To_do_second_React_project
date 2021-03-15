import React, { useEffect } from 'react';
import { NavLink } from  'react-router-dom';
import avatar from '../../../assets/images/avatar.png';
import c from './menu.module.css';

const Menu = (props) => {
    
    useEffect(() => {
        props.getUser();
        // props.getImage();
    }, []);

    return <>
        <div className={c.main}>
            <div className={c.profile}>
                <img className={c.avatar} src={props.photo ? props.photo : avatar} alt="avatar" />
                <div className={c.info}>
                    <div>{props.userData.name}</div>
                    <div>{props.userData.age}</div>
                </div>
            </div>
            <div className={c.line}></div>
            <NavLink className={c.link} to="/notes">Notes</NavLink>
            <NavLink className={c.link} to="/incompleted">Incompleted notes</NavLink>
            <NavLink className={c.link} to="/completed">Completed notes</NavLink>
            <NavLink className={c.settings_link} to="/settings">Settings</NavLink>
        </div>
    </>
}

export default Menu;