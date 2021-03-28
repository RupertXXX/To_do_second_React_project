import {createSelector} from 'reselect';

const getNotes = (state) => {
    let notes = state.notes.notes;
    let isLoading = state.notes.isLoading;
    return {
        notes,
        isLoading,
    };
};
export const notesIsEmpty = createSelector( getNotes, (data) => {
    if(data.notes.length === 0 && !(data.isLoading)) return true; 
    else return false;
});