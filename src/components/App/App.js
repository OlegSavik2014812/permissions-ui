import React, {Component} from 'react';
import NavBar from "./NavBar/NavBar";
import {Route} from "react-router-dom";
import Login from "./Auth/Login/Login";
import HeaderContainer from "./Header/HeaderContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import SignUp from "./Auth/SignUp/SignUp";
import UsersContainer from "./Users/UsersContainer";
import {Provider} from "react-translated";
import messages from './../../lang/lang';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";

class AppContainer extends Component {
    render() {
        let locale = this.props.lang;
        return (
            <Provider language={locale} translation={messages}>
                <Container maxWidth="xl">
                    <HeaderContainer/>
                    <NavBar/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/signUp' render={() => <SignUp/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                </Container>
            </Provider>
        );
    }
}

const mapStateToProps = (state) => ({
    lang: state.lang.locale
});
export default connect(mapStateToProps, null)(AppContainer);
