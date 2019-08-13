import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import {Translate} from "react-translated";

const NavBar = (props) => {
    return (
        <nav className={style.nav}>
            <ul>
                <NavLink to="/users">
                    <li><Translate text='users'/></li>
                </NavLink>
            </ul>
        </nav>
    );
};
export default NavBar;