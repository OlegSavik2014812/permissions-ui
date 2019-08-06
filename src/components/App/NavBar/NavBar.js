import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <nav className={style.nav}>
            <ul>
                <NavLink to="/users">
                    <li>Users</li>
                </NavLink>
            </ul>
        </nav>
    );
};
export default NavBar;