import React, {Component} from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {NavLink} from "react-router-dom";
import {localizeText} from "../../../utils/translator/Translator";
import {withStyles} from "@material-ui/styles";

const styles = {
    root: {
        position: 'fixed',
        top: 5,
        right: 5,
    },
    drawer: {
        width: 250,
    },
    drawerItem: {
        padding: 15,
    },
};

class Drawer extends Component {
    state = {
        open: false,
    };
    setOpen = (isOpened) => {
        this.setState({open: isOpened})
    };


    render() {
        let getLocalizedNavBarItem = (link, text) => {
            return <div className={classes.drawerItem}>
                <NavLink to={link}>
                    <Typography
                        onClick={() => this.setOpen(false)}
                        component="h5"
                        variant="h6"
                        style={{
                            margin: 10,
                        }}>{localizeText(text)}</Typography>
                </NavLink>
            </div>
        };
        let {classes} = this.props;
        return (
            <div className={styles.root}>
                <IconButton
                    color="inherit"
                    aria-label="Settings"
                    onClick={() => this.setOpen(true)}>
                    <Typography>
                        <MenuIcon fontSize="small"/>
                    </Typography>
                </IconButton>
                <SwipeableDrawer
                    open={this.state.open}
                    onClose={() => this.setOpen(false)}
                    onOpen={() => this.setOpen(true)}
                >
                    <div className={classes.drawer}>
                        <Typography
                            component="h5"
                            variant="h6"
                            style={{
                                margin: 10,
                            }}>Settings</Typography>
                        <Divider/>
                    </div>
                    {getLocalizedNavBarItem("/users", "users")}
                </SwipeableDrawer>
            </div>
        );
    }
}

export default withStyles(styles)(Drawer);
