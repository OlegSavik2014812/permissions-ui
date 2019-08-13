import {authAPI, usersAPI} from "../../api/api";

const SET_AUTH_INFO = 'SET_AUTH_INFO';
const SET_FETCHING = 'SET_FETCHING';
const SET_PERMISSIONS = 'SET_PERMISSIONS';
const SET_USER_AUTH = 'SET_USER_AUTH';
const LOGOUT = 'LOGOUT';

let initialState = {
    userId: null,
    login: null,
    token: null,
    groupName: null,
    permissions: [],
    isFetching: false
};
const authReducer = (state = initialState, action) => {
    let stateCopy = state;
    switch (action.type) {
        case SET_FETCHING: {
            stateCopy = {...stateCopy};
            stateCopy.isFetching = action.isFetching;
            break;
        }
        case SET_PERMISSIONS: {
            stateCopy = {...state};
            stateCopy.userId = action.userId;
            stateCopy.permissions = [...action.permissions];
            break;
        }
        case SET_USER_AUTH: {
            stateCopy = {...state};
            stateCopy.permissions = [...action.payload.permissions];
            stateCopy.userId = action.payload.userId;
            stateCopy.login = action.payload.login;
            stateCopy.token = action.payload.token;
            stateCopy.groupName = action.payload.groupName;
            break
        }
        case LOGOUT: {
            stateCopy = {...state};
            stateCopy.permissions = null;
            stateCopy.userId = null;
            stateCopy.login = null;
            stateCopy.token = null;
            stateCopy.groupName = null;
            break;
        }
        default: {
            break;
        }
    }
    return stateCopy;
};

export const turnFetching = (isFetching) => ({type: SET_FETCHING, isFetching});
export const setRestUserData = (userId, permissions) => ({type: SET_PERMISSIONS, userId, permissions});
export const setUserData = (userId, login, token, groupName, permissions) => ({
    type: SET_USER_AUTH,
    payload: {userId, login, token, groupName, permissions}
});

export const logOut = () => ({type: LOGOUT});
export const signIn = (login, password) => {
    return (dispatch) => {
        dispatch(turnFetching(true));
        authAPI.signIn(login, password)
            .then(response => response.data)
            .then(data => {
                let login1 = data.login;
                let token = data.token;
                usersAPI.getByLogin(login1)
                    .then(response => {
                        dispatch(setUserData(response.data.id, login1, token, response.data.groupName, response.data.permissions));
                        dispatch(turnFetching(false));
                    });
            });

    };
};
export const signUp = (login, password) => {
    return (dispatch) => {
        dispatch(turnFetching(true));
        authAPI.signUp(login, password)
            .then(response => response.data)
            .then(data => {
                let login1 = data.login;
                let token = data.token;
                usersAPI.getByLogin(login1)
                    .then(response => {

                        dispatch(setUserData(response.data.id, login1, token, response.data.groupName, response.data.permissions));
                        dispatch(turnFetching(false));
                    });
            });

    };
};

export const getUserPermissions = (userId) => {
    return (dispatch) => {
        dispatch(turnFetching(true));
        usersAPI.getById(userId).then(response => {
            dispatch(setRestUserData(response))
        })
    }
};
export default authReducer;