import React from 'react';
import './App.css';
import UsersContainer from "./Users/UsersContainer";
import NavBar from "./NavBar/NavBar";
import {Route} from "react-router-dom";
import Login from "./Login/Login";
import HeaderContainer from "./Header/HeaderContainer";

const App = () => (
    <div className='app-wrapper'>
        <HeaderContainer/>
        <NavBar/>
        <div className='app-wrapper-content'>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
        </div>
    </div>
);

export default App;
