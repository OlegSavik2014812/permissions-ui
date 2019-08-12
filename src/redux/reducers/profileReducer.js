import {usersAPI} from "../../api/api";

const SET_USER = 'SET_USER';
const SET_FETCHING = 'SET_FETCHING';

let initialState = {
    selectedUser: null,
    isFetching: false
};
const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SET_USER: {
            stateCopy.selectedUser = {...action.payload};
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
export const turnFetching = (isFetching) => ({type: SET_FETCHING, isFetching});

export const setUser = (userId, login, groupName, permissions) => ({
    type: SET_USER,
    payload: {userId, login, groupName, permissions}
});

export const getUserById = (userId) => {
    return (dispatch) => {
        dispatch(turnFetching(true));
        usersAPI.getById(userId)
            .then(response => response.data)
            .then(data => {
                dispatch(setUser(data.id, data.login, data.groupName, data.permissions));
                dispatch(turnFetching(false));
            })
    }
};
export default profileReducer;