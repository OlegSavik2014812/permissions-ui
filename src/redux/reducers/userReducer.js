import {usersAPI} from "../../api/api";

const SET_FETCHING = 'SET_FETCHING';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
    isFetching: false,
};
const userReducer = (state = initialState, action) => {
    let stateCopy = state;
    switch (action.type) {
        case SET_USERS: {
            stateCopy = {...state};
            stateCopy.users = [...action.users];
            break;
        }
        case SET_FETCHING: {
            stateCopy = {...stateCopy};
            stateCopy.isFetching = action.isFetching;
            break;
        }
        default: {
            break;
        }
    }
    return stateCopy;
};

export const setUsers = (users) => ({type: SET_USERS, users});
export const turnFetching = (isFetching) => ({type: SET_FETCHING, isFetching});


export const getUsers = () => {/*get users thunk*/
    return (dispatch) => {
        dispatch(turnFetching(true));
        usersAPI.getUsers()
            .then(data => {
                dispatch(setUsers(data));
                dispatch(turnFetching(false));
            });
    };
};

export const deleteUser = (userId, token) => {
    return (dispatch) => {
        dispatch(turnFetching(true));
        usersAPI.deleteById(userId, token)
            .then(() => {
                dispatch(getUsers());
                dispatch(turnFetching(false));
            })
    }
}
export default userReducer;