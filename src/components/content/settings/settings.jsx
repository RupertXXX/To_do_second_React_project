import React from 'react';
import c from './settings.module.css';

const Settings = (props) => {
    return <>
        <div>
            <div>Settings</div>
            <div></div>
            <button className={c.logout} onClick={() => props.logoutUser()}>Logout</button>
        </div>
    </>
}

export default Settings;