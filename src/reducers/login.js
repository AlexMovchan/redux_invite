const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const initialState = {
    login: 'Alex',
    pass: 'frfgekmrf',
    isLogged: false,
};

export default function rootReducer(state=initialState, action) {
    switch(action.type){
        case LOG_IN:
            if(action.data.login === state.login && action.data.pass === state.pass) {
                return {
                    ...state,
                    isLogged: true
                }
            }
            break;
        case LOG_OUT:
            return {
                ...state,
                isLogged: false
            }
        default:
            return state
    }
}
export function logIn(data) {
    return {
        type: LOG_IN,
        data
    }
}

export function logOut(data) {
    return {
        type: LOG_OUT,
    }
}