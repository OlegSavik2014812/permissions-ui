import React from 'react';
import style from './Header.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.loginBlock}>
                <div className={style.headerNavigation}>
                    {props.login}
                </div>
            </div>
        </header>
    );
};
export default Header;