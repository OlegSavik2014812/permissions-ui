import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            return !this.props.token ?
                <Redirect to='/login'/> : <Component {...this.props}/>
        }
    }

    let mapStateToProps = (state) => ({
        token: state.auth.token
    });
    return connect(mapStateToProps)(RedirectComponent);
};
export default withAuthRedirect;