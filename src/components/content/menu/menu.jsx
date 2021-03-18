import React from 'react';
import { NavLink } from  'react-router-dom';
import avatar from '../../../assets/images/avatar.png';
import c from './menu.module.css';

class Menu extends React.Component {
    componentDidMount(){
        this.props.getUser();
        // this.props.getImage();
    }

    render(){
        return <>
            <div className={c.main}>
                <div className={c.profile}>
                    <img className={c.avatar} src={this.props.photo ? this.props.photo : avatar} alt="avatar" />
                    <div className={c.info}>
                        <div>{this.props.userData.name}</div>
                        <div>{this.props.userData.age}</div>
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
}

export default Menu;