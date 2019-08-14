import React from "react";
import {connect} from "react-redux";
import {setLang} from "../../../redux/reducers/langReducer";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import PopupState, {bindMenu, bindTrigger} from 'material-ui-popup-state';
import {localizeText} from "../../../utils/translator/Translator";

class LocaleSwitcher extends React.Component {

    handleChange(fun, lang) {
        fun();
        this.props.setLang(lang);
    }

    render() {
        return (
            <PopupState variant="popover" popupId="demo-popup-menu">
                {popupState => (
                    <React.Fragment>
                        <Button variant="contained" {...bindTrigger(popupState)}>
                            {localizeText("lang")}
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem
                                onClick={() => this.handleChange(popupState.close, 'en')}>{localizeText("english")}</MenuItem>
                            <MenuItem
                                onClick={() => this.handleChange(popupState.close, 'ru')}>{localizeText("russian")}</MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
        );
    }
}

export default connect(null, {setLang})(LocaleSwitcher);