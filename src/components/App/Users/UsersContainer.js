import React from "react";
import {connect} from "react-redux";
import {deleteUser, getUsers} from "../../../redux/reducers/userReducer";
import Preloader from "../../common/Preloader/Preloader";
import Users from "./Users";
import {compose} from "redux";
import withPatientRedirect from "../../../hoc/withPatientPermission";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            this.props.isFetching ?
                <Preloader/> :
                <Users users={this.props.users}
                       deleteUser={this.props.deleteUser}
                       token={this.props.token}
                       permissions={this.props.permission}/>
        )

    }
}

let mapStateToProps = (state) => {

    return {
        users: state.userPage.users,
        isFetching: state.userPage.isFetching,
    }

};
export default compose(
    withPatientRedirect,
    connect(mapStateToProps, {getUsers, deleteUser})
)(UsersContainer);