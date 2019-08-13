import React from 'react';
import style from './Header.module.css';
import {Translate} from "react-translated";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const Header = (props) => {
    return (
        <header className={style.header}>
            <LocaleSwitcher/>
            <div className={style.loginBlock}>
                {props.login ?
                    <>
                        <div onClick={() => props.logOut()}>
                            <Translate text='signOut'/>
                        </div>
                        {props.login}
                        {props.permissions.map(perm => <div>{perm}</div>)}
                    </>
                    : ""
                }
            </div>
        </header>
    );
};
export default Header;