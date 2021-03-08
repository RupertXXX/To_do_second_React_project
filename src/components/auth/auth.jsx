import React from 'react';
import {NavLink} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

const Auth = (props) => {
    return <>
        {
            !props.isLogin 
            ? 
                <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </>
            :
                <Redirect to="/notes" />
        }
    </>
}

export default Auth;