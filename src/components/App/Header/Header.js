import React from 'react';
import style from './Header.module.css';
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import {localizeText} from "../../../utils/translator/Translator";
import AppBar from "@material-ui/core/AppBar";
import {Toolbar} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

let sdf = (props) => <header className={style.header}>

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
</header>;

const Header = (props) => {
    return (
        <div>
            <AppBar position={"static"}>
                <Toolbar>
                    <LocaleSwitcher/>
                    {props.login ?
                        <>
                            <Button variant={"contained"} onClick={() => props.logOut()}>
                                {localizeText("signOut")}
                            </Button>
                            <Typography>
                                {props.login}
                            </Typography>
                        </>
                        : ""
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Header;