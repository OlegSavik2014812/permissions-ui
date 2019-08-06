import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";

const HeaderContainer = props => (<Header {...props}/>);

const mapStateToProps = (state) => ({
    login: state.auth.login,
});
export default connect(mapStateToProps, null)(HeaderContainer);