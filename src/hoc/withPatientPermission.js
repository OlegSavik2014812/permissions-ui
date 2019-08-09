import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const withPatientRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            let userId1 = this.props.userId;
            let permissions = this.props.permissions;

            if (!userId1) {
                return <Redirect to='/login'/>;
            }
            if (permissions.length === 1 && permissions.find(permission => permission === 'PATIENT')) {
                return <Redirect to={`/profile/${userId1}`}/>;
            } else {
                return <Component {...this.props}/>;
            }
        }
    }

    let mapStateToProps = (state) => ({
        userId: state.auth.userId,
        permissions: state.auth.permissions,
    });
    return connect(mapStateToProps, null)(RedirectComponent);
};
export default withPatientRedirect;