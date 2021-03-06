import { authAPI, userAPI } from '../../API'
import {stopSubmit} from 'redux-form';

const SET_REGISTER_USER_MESSAGES = 'SET_REGISTER_USER_MESSAGES';
const SET_USER_DATA = 'SET_USER_DATA';
const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
const LOGIN_IS = 'LOGIN_IS';
const LOGIN_IS_NOT = 'LOGIN_IS_NOT';

let initialState = {
    isLogin: false,
    messages: [],
    userData: {
        name: null,
        email: null,
        age: null
    },
};

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_REGISTER_USER_MESSAGES:
            return {
                ...state,
                messages: action.messages,
            }
        case LOGIN_IS:
            return {
                ...state,
                isLogin: true,
            }
        case LOGIN_IS_NOT:
            return {
                ...state,
                isLogin: false,
            }
        case SET_USER_DATA:
            return {
                ...state,
                userData: {
                    name: action.name,
                    email: action.email,
                    age: action.age
                }
            }
        case CLEAR_USER_DATA: 
            return {
                ...state,
                userData: {
                    email: null,
                    password: null
                },
                isLogin: false,
            }
        default: return state;
    }
}

const loginIsCreateAction = () => ({type: 'LOGIN_IS'});
const loginIsNotCreateAction = () => ({type: 'LOGIN_IS_NOT'});
const setRegisterUserMessagesCreateAction = (messages) => ({ type: 'SET_REGISTER_USER_MESSAGES', messages });
const clearUserDataCreateAction = () => ({type: 'CLEAR_USER_DATA'});
const setUserDataCreateAction = (data) => ({ type: 'SET_USER_DATA', name: data.name, email: data.email, age: data.age })

export const registerThunkCreator = (name, email, password, age) => {
    return (dispatch) => {
        return authAPI.registerUser(name, email, password, age).then(response => {
            if(response.data.resultCode === 0){
                dispatch(loginThunkCreator(email, password));
            }
            else {
                dispatch(setRegisterUserMessagesCreateAction(response.data.messages));
            }
        });
    }
}
export const loginThunkCreator = (email, password) => {
    return (dispatch) => {
        authAPI.loginUser(email, password).then(response => {
            if(response.data.resultCode === 0){
                dispatch(loginIsCreateAction());
            }
            // else{
            //     let action = stopSubmit("login", {_error: response.data.messages[0] });
            //     dispatch(action);
            // }
        });
    }
}
export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logoutUser().then(response => {
            if(response.data.resultCode === 0){
                dispatch(clearUserDataCreateAction());
            }
        })
    }
}
export const getUserThunkCreator = () => {
    return (dispatch) => {
        userAPI.getUser().then(response => {
            dispatch(setUserDataCreateAction(response.data));
        })
    }
}


// export const authLoginThunkCreator = (email, password, rememberMe, captcha) => {
//     return (dispatch) => {
//         authAPI.authLogin(email, password, rememberMe, captcha).then(response => {
//             if (response.data.resultCode === 0) dispatch(authMeThunkCreator());
//             else if (response.data.resultCode === 10) dispatch(getCaptchaThunkCreator())
//             else {
//                 let action = stopSubmit("login", {_error: response.data.messages[0] });
//                 dispatch(action);
//             }
//         });
//     }
// }
// export const authLogoutThunkCreator = () => {
//     return (dispatch) => {
//         authAPI.authLogout().then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(clearAuthUserDataCreateAction());
//             }
//         });
//     }
// }

export default userReducer;