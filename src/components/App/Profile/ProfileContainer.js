import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUserTeeth} from "../../../redux/reducers/teethReducer";
import Tooth from "./Tooth/Tooth";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let matchedUserId = this.props.match.params.userId;
        this.props.getUserTeeth(matchedUserId);
    }

    render() {
        return (<div>
            <h1>{this.props.login}'s Profile</h1>
            {this.props.teeth.map(tooth => <Tooth tooth={tooth}/>)}
        </div>)
    }
}

let mapStateToProps = (state) => ({
    teeth: state.teethPage.teeth,
    login: state.auth.login
});

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserTeeth})
)(ProfileContainer);