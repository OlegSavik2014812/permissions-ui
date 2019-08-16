import React from "react";
import {connect} from "react-redux";
import Tooth from "./Tooth";


const ToothContainer = (props) => {
    return (
        props.tooth ? <Tooth user={props.user} tooth={props.tooth}/> : ""
    );
};

let mapStateToProps = (state) => ({
    user: state.profilePage.selectedUser,
    tooth: state.teethPage.selectedTooth,
});
export default connect(mapStateToProps, {})(ToothContainer);