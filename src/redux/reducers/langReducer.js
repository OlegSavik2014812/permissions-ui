const SET_LANG = 'SET_LANG';

let initialState = {
    locale: 'ru'
};
const langReducer = (state = initialState, action) => {
    let stateCopy = state;
    switch (action.type) {
        case SET_LANG: {
            stateCopy = {...stateCopy};
            stateCopy.locale = action.lang;
            break;
        }
        default: {
            break;
        }
    }
    return stateCopy;
};
export const setLang = (lang) => ({type: SET_LANG, lang});

export default langReducer;