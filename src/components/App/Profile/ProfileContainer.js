import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUserTeeth} from "../../../redux/reducers/teethReducer";
import {getUserById} from "../../../redux/reducers/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let matchedUserId = this.props.match.params.userId;
        this.props.getUserById(matchedUserId);
        this.props.getUserTeeth(matchedUserId);
    }

    render() {
        return (
            <div>
                <Profile user={this.props.user} teeth={this.props.teeth}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    user: state.profilePage.selectedUser,
    teeth: state.teethPage.teeth,
});

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserTeeth, getUserById})
)(ProfileContainer);