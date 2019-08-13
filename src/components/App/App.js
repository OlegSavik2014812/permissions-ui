import React, {Component} from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar";
import {Route} from "react-router-dom";
import Login from "./Auth/Login/Login";
import HeaderContainer from "./Header/HeaderContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import SignUp from "./Auth/SignUp/SignUp";
import UsersContainer from "./Users/UsersContainer";
import {connect} from "react-redux";
import {Provider} from "react-translated";
import messages from './../../lang/lang';

class AppContainer extends Component {
    render() {
        let locale = this.props.lang;
        return (
            <Provider language={locale} translation={messages}>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavBar/>
                    <div className='app-wrapper-content'>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/signUp' render={() => <SignUp/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    </div>
                </div>
            </Provider>
        );
    }
}

const mapStateToProps = (state) => ({
    lang: state.lang.locale
});
export default connect(mapStateToProps, null)(AppContainer);
