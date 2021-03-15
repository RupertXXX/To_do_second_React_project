import { notesAPI } from '../../API'

const SET_USER_NOTES = 'SET_USER_NOTES';
const SET_LOCATION = 'SET_LOCATION';
const SET_NOTES_MESSAGES = 'SET_NOTES_MESSAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_NOTES_COUNT = 'SET_USER_NOTES_COUNT';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_IS_NOT_LOADING = 'SET_IS_NOT_LOADING';

let initialState = {
    notes: ['test'],
    count: null,
    pageSize: 18,
    portionSize: 10,
    currentPage: 0,
    location: "notes",
    messages: [],
    isLoading: false,
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
        case SET_USER_NOTES_COUNT:
            return {
                ...state,
                count: action.count,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case SET_IS_NOT_LOADING: 
            return {
                ...state,
                isLoading: false
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

export const setLocationCreateAction = (location) => ({type: 'SET_LOCATION', location});
export const setCurrentPageCreateAction = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage});

const setNotesCreateAction = (notes) => ({ type: 'SET_USER_NOTES', notes});
const setNotesCountCreateAction = (count) => ({ type: 'SET_USER_NOTES_COUNT', count});
const setUserMessagesCreateAction = (spot, messages) => ({type: 'SET_NOTES_MESSAGES', spot, messages});
const setIsLoadingCreateAction = () => ({type: 'SET_IS_LOADING'});
const setIsNotLoadingCreateAction = () => ({type: 'SET_IS_NOT_LOADING'});

export const getNotesThunkCreator = (skip) => {
    return (dispatch, getState) => {
        const pageSize = getState().notes.pageSize;
        skip *= pageSize;
        dispatch(setIsLoadingCreateAction());
        return notesAPI.getNotes(getState().user.token, pageSize, skip)
            .then(response => {
                dispatch(setNotesCreateAction(response.data.data));
                dispatch(setIsNotLoadingCreateAction());
            }).catch(error => {
                dispatch(setUserMessagesCreateAction("get", error));
                dispatch(setIsNotLoadingCreateAction());
        });
    };
};
export const getNotesCountThunkCreator = () => {
    return (dispatch, getState) => {
        return notesAPI.getNotesCount(getState().user.token)
            .then(response => {
                dispatch(setNotesCountCreateAction(response.data.count));
            }).catch(error => {
                dispatch(setUserMessagesCreateAction("get", error));
        });
    };
};
export const getCompletedNotesThunkCreator = (skip, completed) => {
    return (dispatch, getState) => {
        const pageSize = getState().notes.pageSize;
        skip *= pageSize;
        dispatch(setIsLoadingCreateAction());
        return notesAPI.getCompletedNotes(getState().user.token, pageSize, skip, completed)
            .then(response => {
                dispatch(setNotesCreateAction(response.data.data, response.data.count));
                dispatch(setIsNotLoadingCreateAction());
            }).catch(error => {
                dispatch(setIsNotLoadingCreateAction());
                dispatch(setUserMessagesCreateAction("getCompleted", error));
        });
    };
};
export const setNoteThunkCreator = (description) => {
    return (dispatch, getState) => {
        let location = getState().notes.location;
        return notesAPI.setNote(getState().user.token, description)
            .then(response => {
                dispatch(getNotesCountThunkCreator());
                if(location === "notes") dispatch(getNotesThunkCreator(0));
                else if(location === "incompleted") dispatch(getCompletedNotesThunkCreator(0, false));
                else if(location === "completed") dispatch(getCompletedNotesThunkCreator(0, true));
            }).catch(error => {
                dispatch(setUserMessagesCreateAction("add", error));
        });
    };
};
export const deleteNoteThunkCreator = (id) => {
    return (dispatch, getState) => {
        let location = getState().notes.location;
        return notesAPI.deleteNote(getState().user.token, id)
            .then(response => {
                if(location === "notes") dispatch(getNotesThunkCreator(0));
                else if(location === "incompleted") dispatch(getCompletedNotesThunkCreator(0, false));
                else if(location === "completed") dispatch(getCompletedNotesThunkCreator(0, true));
            }).catch(error => {
                dispatch(setUserMessagesCreateAction("complete", error));
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