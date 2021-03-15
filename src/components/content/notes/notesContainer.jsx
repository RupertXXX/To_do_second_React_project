import React from 'react';
import { connect } from 'react-redux';
import { getNotesThunkCreator, 
            deleteNoteThunkCreator, 
            setCompleteThunkCreator, 
            getCompletedNotesThunkCreator, 
            setLocationCreateAction, 
            setCurrentPageCreateAction, 
            getNotesCountThunkCreator, } from '../../../redux/reducers/notesReducer';
import { compose } from 'redux';
import withErrorBoundary from '../../HOCs/withErrorBoundary';
import Notes from './notes';
import { withRouter } from 'react-router-dom';

class NotesContainer extends React.Component{
    componentDidMount() {
        this.props.getNotesCount();
        if(this.props.location.pathname === '/notes') {
            this.props.getNotes(this.props.currentPage);
            this.props.setLocation("notes");
        }
        else if(this.props.location.pathname === '/incompleted') {
            this.props.getCompletedNotes(this.props.currentPage, false);
            this.props.setLocation("incompleted");
        }
        else if(this.props.location.pathname === '/completed') {
            this.props.getCompletedNotes(this.props.currentPage, true);
            this.props.setLocation("completed");
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.location.pathname !== this.props.location.pathname ||
            prevProps.currentPage !== this.props.currentPage){
            if(this.props.location.pathname === '/notes') {
                this.props.getNotes(this.props.currentPage);
                this.props.setLocation("notes");
            }
            else if(this.props.location.pathname === '/incompleted') {
                this.props.getCompletedNotes(this.props.currentPage, false);
                this.props.setLocation("incompleted");
            }
            else if(this.props.location.pathname === '/completed') {
                this.props.getCompletedNotes(this.props.currentPage, true);
                this.props.setLocation("completed");
            }
        }
    }

    render(){
        return <Notes {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return ({
        notes: state.notes.notes,
        count: state.notes.count,
        pageSize: state.notes.pageSize,
        portionSize: state.notes.portionSize,
        currentPage: state.notes.currentPage,
        isLoading: state.notes.isLoading,
    })
}

let mapDispatchToProps = (dispatch) => {
    return {
        getNotes: (skip) => {
            dispatch(getNotesThunkCreator(skip));
        },
        getNotesCount: () => {
            dispatch(getNotesCountThunkCreator());
        },
        getCompletedNotes: (skip, completed) => {
            dispatch(getCompletedNotesThunkCreator(skip, completed));
        },
        deleteNote: (id) => {
            dispatch(deleteNoteThunkCreator(id));
        },
        setComplete: (id, isComplete) => {
            dispatch(setCompleteThunkCreator(id, isComplete));
        },
        setLocation: (location) => {
            dispatch(setLocationCreateAction(location));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageCreateAction(currentPage));
        }
    }
}

export default compose( withErrorBoundary,
                        connect(mapStateToProps, mapDispatchToProps),
                        withRouter,
                        )(NotesContainer);