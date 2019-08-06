import React from 'react';
import style from './User.module.css'

const User = (props) => {
    let user = props.user;
    return (
        <div key={user.id} className={style.userItem}>
            <div className={style.information}>
                <div className={style.userFullName}>{user.login}</div>
                <div className={style.status}>{user.groupName}</div>
            </div>


            <div className={style.btnGroup}>
                <div className={style.followBtn} onClick={() => props.deleteUser(user.id,props.token)}>
                    delete
                </div>
            </div>
        </div>
    )
};

export default User;