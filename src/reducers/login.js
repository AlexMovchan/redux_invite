const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const REG_USER = 'REG_USER';

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
        case REG_USER:
            return {
                ...state,
                login: action.data.login,
                pass: action.data.pass
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

export function registerUser(data) {
     return {
         type: REG_USER,
         data
     }
}

export function logOut(data) {
    return {
        type: LOG_OUT,
    }
}