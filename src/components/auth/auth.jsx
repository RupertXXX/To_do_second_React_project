import React from 'react';
import {NavLink} from 'react-router-dom';

const Auth = () => {
    return <>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
    </>
}

export default Auth;