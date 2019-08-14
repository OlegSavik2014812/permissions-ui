import React from 'react';
import style from './Header.module.css';
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import {localizeText} from "../../../utils/translator/Translator";

const Header = (props) => {
    return (
        <header className={style.header}>
            <LocaleSwitcher/>
            <div className={style.loginBlock}>
                {props.login ?
                    <>
                        <div onClick={() => props.logOut()}>
                            {localizeText("signOut")}
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