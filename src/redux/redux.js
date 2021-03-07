import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers/appReducer';
import userReducer from './reducers/userReducer';
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
    user: userReducer,
    form: formReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;