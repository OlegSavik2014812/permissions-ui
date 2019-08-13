import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../../redux/reducers/authReducer";

const HeaderContainer = props => (<Header {...props}/>);

const mapStateToProps = (state) => ({
        locale: state.lang.locale,
        login: state.auth.login,
        permissions:
            state.auth.permissions ? [...state.auth.permissions] : []
    })
;
export default connect(mapStateToProps, {logOut})(HeaderContainer);