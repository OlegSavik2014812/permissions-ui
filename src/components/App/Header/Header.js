import React from 'react';
import style from './Header.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.loginBlock}>
                {props.login ?
                    <>
                        <div onClick={() => props.logOut()}>LogOut</div>
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