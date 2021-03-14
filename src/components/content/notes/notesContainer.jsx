import React from 'react';
import { connect } from 'react-redux';
import { getNotesThunkCreator, 
         setCompleteThunkCreator, 
         getCompletedNotesThunkCreator, 
         setLocationCreateAction } from '../../../redux/reducers/notesReducer';
import { compose } from 'redux';
import withErrorBoundary from '../../HOCs/withErrorBoundary';
import Notes from './notes';
import { withRouter } from 'react-router-dom';

class NotesContainer extends React.Component{
    componentDidMount() {
        if(this.props.location.pathname === '/notes') {
            this.props.getNotes(0);
            this.props.setLocation("notes");
        }
        else if(this.props.location.pathname === '/incompleted') {
            this.props.getCompletedNotes(0, false);
            this.props.setLocation("incompleted");
        }
        else if(this.props.location.pathname === '/completed') {
            this.props.getCompletedNotes(0, true);
            this.props.setLocation("completed");
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.location.pathname !== this.props.location.pathname){
            if(this.props.location.pathname === '/notes') {
                this.props.getNotes(0);
                this.props.setLocation("notes");
            }
            else if(this.props.location.pathname === '/incompleted') {
                this.props.getCompletedNotes(0, false);
                this.props.setLocation("incompleted");
            }
            else if(this.props.location.pathname === '/completed') {
                this.props.getCompletedNotes(0, true);
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
    })
}

let mapDispatchToProps = (dispatch) => {
    return {
        getNotes: (skip) => {
            dispatch(getNotesThunkCreator(skip));
        },
        getCompletedNotes: (skip, completed) => {
            dispatch(getCompletedNotesThunkCreator(skip, completed));
        },
        setComplete: (id, isComplete) => {
            dispatch(setCompleteThunkCreator(id, isComplete));
        },
        setLocation: (location) => {
            dispatch(setLocationCreateAction(location));
        },
    }
}

export default compose( withErrorBoundary,
                        connect(mapStateToProps, mapDispatchToProps),
                        withRouter,
                        )(NotesContainer);