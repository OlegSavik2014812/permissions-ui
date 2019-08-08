import React from 'react';
import style from './Users.module.css';
import User from "./User/User";

const Users = (props) => {
    debugger;
    return (
        <div>
            <div className={style.userWrapper}>
                <div className={style.userList}>
                    {
                        props.users.map(user =>
                            <User user={user}
                                  deleteUser={props.deleteUser}
                                  token={props.token}
                                  permissions={props.permissions}/>
                        )
                    }
                </div>
            </div>
        </div>)
        ;
};

export default Users;