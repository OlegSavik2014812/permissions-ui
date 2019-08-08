import React from "react";
import {connect} from "react-redux";
import {deleteUser, getUsers} from "../../../redux/reducers/userReducer";
import Preloader from "../../commons/Preloader/Preloader";
import Users from "./Users";

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
        token: state.auth.token,
        isFetching: state.userPage.isFetching,
        permissions: [...state.auth.permissions]
    }
};
export default connect(mapStateToProps, {getUsers, deleteUser})(UsersContainer);