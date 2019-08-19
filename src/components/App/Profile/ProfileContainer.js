import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getToothInfo, getUserTeeth, setSelectedTooth} from "../../../redux/reducers/teethReducer";
import {getUserById} from "../../../redux/reducers/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    state = {
        matchedUserId: null
    };

    componentDidMount() {
        let matchedUserId = this.props.match.params.userId;
        this.setState({matchedUserId: matchedUserId});
        this.props.getUserById(matchedUserId);
        this.props.getUserTeeth(matchedUserId);
    }

    loadUserTeeth = () => {
        this.props.getUserTeeth(this.state.matchedUserId);
    };

    render() {
        return (
            <Profile user={this.props.user}
                     userTeeth={this.props.userTeeth}
                     selectedTooth={this.props.selectedTooth}
                     getToothInfo={this.props.getToothInfo}
                     setSelectedTooth={this.props.setSelectedTooth}
                     updateTeeth={this.loadUserTeeth}/>
        )
    }
}

let mapStateToProps = (state) => ({
    user: state.profilePage.selectedUser,
    userTeeth: state.teethPage.userTeeth,
    selectedTooth: state.teethPage.selectedTooth,
});
export default compose(
    withRouter,
    connect(mapStateToProps, {getUserTeeth, getUserById, getToothInfo, setSelectedTooth})
)(ProfileContainer);