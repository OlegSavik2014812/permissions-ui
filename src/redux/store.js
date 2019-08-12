import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";
import teethReducer from "./reducers/teethReducer";
import profileReducer from "./reducers/profileReducer";

let reducers = combineReducers(
    {
        teethPage: teethReducer,
        userPage: userReducer,
        profilePage: profileReducer,
        auth: authReducer,
        form: formReducer
    }
);

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;