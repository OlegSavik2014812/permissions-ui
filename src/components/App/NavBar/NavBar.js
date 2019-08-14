import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import {localizeText} from "../../../utils/translator/Translator";

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <NavLink to="/users">
                    <li>{localizeText("users")}</li>
                </NavLink>
            </ul>
        </nav>
    );
};
export default NavBar;