import {authAPI} from "../../api/api";

const SET_AUTH_INFO = 'SET_AUTH_INFO';
const SET_FETCHING = 'SET_FETCHING';

let initialState = {
    login: null,
    token: null,
    isFetching: false
};
const authReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SET_AUTH_INFO: {
            stateCopy.login = action.login;
            stateCopy.token = action.token;
            break;
        }
        case SET_FETCHING: {
            stateCopy.isFetching = action.isFetching;
            break;
        }
        default: {
            stateCopy = state;
            break;
        }
    }
    return stateCopy;
};

export const setAuthInfo = (login, token) => ({type: SET_AUTH_INFO, login, token});
export const turnFetching = (isFetching) => ({type: SET_FETCHING, isFetching});


export const signIn = (login, password) => {
    return (dispatch) => {
        debugger;
        dispatch(turnFetching(true));
        authAPI.signIn(login, password)
            .then(response => response.data)
            .then(data => {
                debugger;
                let login1 = data.login;
                let token = data.token;
                dispatch(setAuthInfo(login1, token));
                dispatch(turnFetching(false));
            });
    };
};
export const signUp = (login, password) => {
    return (dispatch) => {
        dispatch(turnFetching(true));
        authAPI.signUp(login, password)
            .then(data => {
                dispatch(setAuthInfo(data.login, data.token));
                dispatch(turnFetching(false));
            });
    };
};
export default authReducer;