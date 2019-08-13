import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";
import teethReducer from "./reducers/teethReducer";
import profileReducer from "./reducers/profileReducer";
import langReducer from "./reducers/langReducer";

let reducers = combineReducers(
    {
        teethPage: teethReducer,
        userPage: userReducer,
        profilePage: profileReducer,
        lang: langReducer,
        auth: authReducer,
        form:
        formReducer
    }
    )
;

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;