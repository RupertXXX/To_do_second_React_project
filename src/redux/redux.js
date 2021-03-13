import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers/appReducer';
import userReducer from './reducers/userReducer';
import notesReducer from './reducers/notesReducer';
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    user: userReducer,
    form: formReducer,
    app: appReducer,
    notes: notesReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;