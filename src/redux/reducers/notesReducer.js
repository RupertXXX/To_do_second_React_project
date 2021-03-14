import { notesAPI } from '../../API'

const SET_USER_NOTES = 'SET_USER_NOTES';
const SET_LOCATION = 'SET_LOCATION';
const SET_NOTES_MESSAGES = 'SET_NOTES_MESSAGES';

let initialState = {
    notes: ['test'],
    location: "notes",
    messages: [],
};

const notesReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_NOTES:
            let notes_is = action.notes.map((el) => ({...el, date: el.createdAt.slice(0, 10)}));
            return {
                ...state,
                notes: notes_is,
            }
        case SET_LOCATION:
            return {
                ...state,
                location: action.location,
            }
        case SET_NOTES_MESSAGES:
            let message = {
                spot: action.spot,
                messages: action.messages
            }
            return {
                ...state,
                messages: [...state.messages, message],
            }
        default: return state;
    }
}

export const setLocationCreateAction = (location) => ({type: 'SET_LOCATION', location})

const setNotesCreateAction = (notes) => ({ type: 'SET_USER_NOTES', notes });
const setUserMessagesCreateAction = (spot, messages) => ({type: 'SET_NOTES_MESSAGES', spot, messages});

export const getNotesThunkCreator = (skip) => {
    const limit = 18;
    skip *= limit;
    return (dispatch, getState) => {
        return notesAPI.getNotes(getState().user.token, limit, skip)
            .then(response => {
                dispatch(setNotesCreateAction(response.data.data));
            }).catch(error => {
                dispatch(setUserMessagesCreateAction("get", error));
        });
    };
};
export const getCompletedNotesThunkCreator = (skip, completed) => {
    const limit = 18;
    skip *= limit;
    return (dispatch, getState) => {
        return notesAPI.getCompletedNotes(getState().user.token, limit, skip, completed)
            .then(response => {
                dispatch(setNotesCreateAction(response.data.data));
            }).catch(error => {
                dispatch(setUserMessagesCreateAction("getCompleted", error));
        });
    };
};
export const setNoteThunkCreator = (description) => {
    return (dispatch, getState) => {
        let location = getState().notes.location;
        return notesAPI.setNote(getState().user.token, description)
            .then(response => {
                if(location === "notes") dispatch(getNotesThunkCreator(0));
                else if(location === "incompleted") dispatch(getCompletedNotesThunkCreator(0, false));
                else if(location === "completed") dispatch(getCompletedNotesThunkCreator(0, true));
            }).catch(error => {
                dispatch(setUserMessagesCreateAction("add", error));
        });
    };
};
export const setCompleteThunkCreator = (id, isComplete) => {
    return (dispatch, getState) => {
        let location = getState().notes.location;
        return notesAPI.setComplete(getState().user.token, id, isComplete)
            .then(response => {
                if(location === "notes") dispatch(getNotesThunkCreator(0));
                else if(location === "incompleted") dispatch(getCompletedNotesThunkCreator(0, false));
                else if(location === "completed") dispatch(getCompletedNotesThunkCreator(0, true));
            }).catch(error => {
                dispatch(setUserMessagesCreateAction("complete", error));
        });
    };
};

export default notesReducer;