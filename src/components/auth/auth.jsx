import React from 'react';
import {NavLink} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import c from './auth.module.css';

const Auth = (props) => {
    return <div className={c.main}>
        {
            !props.isLogin 
            ? 
                <div className={c.almost_main}>
                    <div className={c.title}>Welcome to <span>The Notes</span> </div>
                    <div className={c.links}>
                        <div className={c.text}> Login to continue </div>
                        <NavLink className={c.login} to="/login">Login</NavLink>
                        <div className={c.text}> If you don't have an account you can register </div>
                        <NavLink className={c.register} to="/register">Register</NavLink>
                    </div>
                </div>
            :
                <Redirect to="/notes" />
        }
    </div>
}

export default Auth;