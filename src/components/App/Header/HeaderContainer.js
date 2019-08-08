import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";

const HeaderContainer = props => (<Header {...props}/>);

const mapStateToProps = (state) => ({
    login: state.auth.login,
    permissions: [...state.auth.permissions]
});
export default connect(mapStateToProps, null)(HeaderContainer);