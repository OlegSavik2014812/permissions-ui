import React from 'react';
import style from './User.module.css'
import {NavLink} from "react-router-dom";

const User = (props) => {
    let user = props.user;
    let perms = props.permissions ? props.permissions : [];
    return (
        <div key={user.id} className={style.userItem}>
            <div className={style.information}>
                <NavLink to={`/profile/${user.id}`}>
                    <div className={style.userFullName}>{user.login}</div>
                </NavLink>
                <div className={style.status}>{user.groupName}</div>
            </div>
            {
                perms.includes("admin") ? <div className={style.btnGroup}>
                    <div className={style.followBtn} onClick={() => props.deleteUser(user.id, props.token)}>
                        delete
                    </div>
                </div> : ""
            }

        </div>
    )
};

export default User;    