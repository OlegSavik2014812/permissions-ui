import {teethAPI} from "../../api/api";

const SET_FETCHING = 'SET_FETCHING';
const SET_TEETH = 'SET_TEETH';
const SELECT_TOOTH = 'SELECT_TOOTH';

let initialState = {
    userTeeth: [],
    isFetching: false,
    selectedTooth: null
};
const teethReducer = (state = initialState, action) => {

    let stateCopy = state;
    switch (action.type) {
        case SET_TEETH: {
            stateCopy = {...state};
            stateCopy.userTeeth = [...action.userTeeth];
            break;
        }
        case SELECT_TOOTH: {
            stateCopy = {...state};
            stateCopy.selectedTooth = {...action.selectedTooth};
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

export const setTeeth = (userTeeth) => ({type: SET_TEETH, userTeeth: userTeeth});
export const turnFetching = (isFetching) => ({type: SET_FETCHING, isFetching});

export const addNewUserTooth = (userId, toothNumber, description, price) => {
    return (dispatch) => {
        let treatments = null;
        let complaints = null;
        if (price) {
            treatments = [{
                description: description,
                price: price
            }];
        } else {
            complaints = [{
                description: description
            }];
        }
        teethAPI.postUserTooth(userId, toothNumber, complaints, treatments)
            .then((response) => {
                dispatch(getUserTooth(response.data.userToothId))
            });
    }
};
export const complain = (userToothId, problemDescription) => {
    return (dispatch) => {
        teethAPI.postComplaint(userToothId, problemDescription)
            .then(() =>
                dispatch(getUserTooth(userToothId)))
    }
};

export const treat = (userToothId, procedureDescription, price) => {
    return (dispatch) => {
        teethAPI.postTreatment(userToothId, procedureDescription, price)
            .then(() =>
                dispatch(getUserTooth(userToothId))
            )
    }
};

export const getUserTooth = (toothId) => {
    return (dispatch) => {
        teethAPI.getUserToothById(toothId)
            .then(response => {
                dispatch(setSelectedTooth(response.data))
            })
    }
};

export const setSelectedTooth = (selectedTooth) => ({type: SELECT_TOOTH, selectedTooth});

export const getToothInfo = (toothGeneralNumber) => {
    return (dispatch) => {
        teethAPI.getToothById(toothGeneralNumber)
            .then(response => {
                let data = response.data;
                dispatch(setSelectedTooth({
                    toothNumber: data.id,
                    toothType: data.type
                }));
            })
    }
};

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