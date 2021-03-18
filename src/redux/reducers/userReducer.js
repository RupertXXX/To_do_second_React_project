import { authAPI, userAPI } from '../../API'
import {stopSubmit} from 'redux-form';

const SET_USER_MESSAGES = 'SET_USER_MESSAGES';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_IMAGE = 'SET_IMAGE';
const SET_USER_TOKEN = 'SET_USER_TOKEN';
const SET_USER_REGISTER_TOKEN = 'SET_USER_REGISTER_TOKEN';
const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
const LOGIN_IS = 'LOGIN_IS';
const LOGIN_IS_NOT = 'LOGIN_IS_NOT';

let initialState = {
    isLogin: false,
    messages: [],
    token: null,
    registerToken: null,
    userData: {
        name: null,
        email: null,
        age: null,
    },
    photo: null,
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
        case SET_IMAGE:
            return {
                ...state,
                photo: action.photo,
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
// const loginIsNotCreateAction = () => ({type: 'LOGIN_IS_NOT'});
const setUserMessagesCreateAction = (spot, messages) => ({ type: 'SET_USER_MESSAGES', spot, messages });
const clearUserDataCreateAction = () => ({type: 'CLEAR_USER_DATA'});
const setUserDataCreateAction = (data) => ({ type: 'SET_USER_DATA', name: data.name, email: data.email, age: data.age });
const setImageCreateAction = (photo) => ({type: 'SET_IMAGE', photo})
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
                let error_is = error.response.statusText;
                let action = stopSubmit("register", {_error: error_is});
                dispatch(action);
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
                let error_is = error.response.statusText;
                let action = stopSubmit("login", {_error: error_is});
                dispatch(action);
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
    return (dispatch, getState) => {
        userAPI.getUser(getState().user.token).then(response => {
            dispatch(setUserDataCreateAction(response.data));
        })
    }
};
export const getImageThunkCreator = () => {
    return (dispatch, getState) => {
        userAPI.getImage(getState().user.token)
        .then(response => {
            dispatch(setImageCreateAction(response.data));
        }).catch(error => {
            dispatch(setUserMessagesCreateAction("getImage", error));
        });
    };
};
export const setImageThunkCreator = (image) => {
    return (dispatch, getState) => {
        userAPI.setImage(getState().user.token, image)
        .then(response => {
            dispatch(getImageThunkCreator());
        }).catch(error => {
            dispatch(setUserMessagesCreateAction("setImage", error));
        });
    };
};
export const updateUserThunkCreator = (name, email, password, age) => {
    return (dispatch, getState) => {
        userAPI.updateUser(getState().user.token, name, email, password, age)
        .then(response => {
            dispatch(getUserThunkCreator());
        }).catch(error => {
            dispatch(setUserMessagesCreateAction("updateUser", error));
        });
    };
};
export const deleteUserThunkCreator = () => {
    return (dispatch, getState) => {
        userAPI.deleteUser(getState().user.token)
        .then(response => {
            dispatch(clearUserDataCreateAction());
        }).catch(error => {
            dispatch(setUserMessagesCreateAction("deleteUser", error));
        });
    };
};

export default userReducer;