import { authAPI, userAPI } from '../../API'
import {stopSubmit} from 'redux-form';

const SET_USER_MESSAGES = 'SET_USER_MESSAGES';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_TOKEN = 'SET_USER_TOKEN';
const SET_USER_REGISTER_TOKEN = 'SET_USER_REGISTER_TOKEN';
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
    token: null,
    registerToken: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_MESSAGES:
            let message = {
                spot: action.spot,
                messages: action.messages
            }
            return {
                ...state,
                messages: [...state.messages, message],
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
        case SET_USER_TOKEN: 
            return {
                ...state,
                token: action.token,
            }
        case SET_USER_REGISTER_TOKEN: 
            return {
                ...state,
                registerToken: action.registerToken,
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
const setUserMessagesCreateAction = (spot, messages) => ({ type: 'SET_USER_MESSAGES', spot, messages });
const clearUserDataCreateAction = () => ({type: 'CLEAR_USER_DATA'});
const setUserDataCreateAction = (data) => ({ type: 'SET_USER_DATA', name: data.name, email: data.email, age: data.age });
const setUserTokenCreateAction = (token) => ({type: 'SET_USER_TOKEN', token});
const setUserRegisterTokenCreateAction = (registerToken) => ({type: 'SET_USER_REGISTER_TOKEN', registerToken});

export const registerThunkCreator = (name, email, password, age) => {
    return (dispatch) => {
        return authAPI.registerUser(name, email, password, age)
            .then(response => {
                dispatch(loginThunkCreator(email, password));
                dispatch(setUserRegisterTokenCreateAction(response.data.token));
            }).catch(error => {
                dispatch(setUserMessagesCreateAction("register", error));
        });
    };
};
export const loginThunkCreator = (email, password) => {
    return (dispatch) => {
        authAPI.loginUser(email, password)
            .then(response => {
                dispatch(setUserTokenCreateAction(response.data.token));
                dispatch(loginIsCreateAction());
            }).catch(error => {
                dispatch(setUserMessagesCreateAction("login", error));
        });
    };
};
export const logoutThunkCreator = () => {
        return (dispatch, getState) => {
            authAPI.logoutUser(getState().user.token)
            .then(response => {
                dispatch(clearUserDataCreateAction());
            }).catch(error => {
                dispatch(setUserMessagesCreateAction("logout", error));
        });
    };
};
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