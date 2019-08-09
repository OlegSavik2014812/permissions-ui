import {teethAPI} from "../../api/api";

const SET_FETCHING = 'SET_FETCHING';
const SET_TEETH = 'SET_TEETH';

let initialState = {
    teeth: [],
    isFetching: false,
};
const teethReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SET_TEETH: {
            stateCopy.teeth = [...action.teeth];
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

export const setTeeth = (teeth) => ({type: SET_TEETH, teeth});
export const turnFetching = (isFetching) => ({type: SET_FETCHING, isFetching});


export const getUserTeeth = (userId) => {/*get users thunk*/
    return (dispatch) => {
        dispatch(turnFetching(true));
        teethAPI.getUserTeeth(userId)
            .then(response => {
                dispatch(setTeeth(response.data));
                dispatch(turnFetching(false));
            });
    };
};
export default teethReducer;