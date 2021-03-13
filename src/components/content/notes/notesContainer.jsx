import { connect } from 'react-redux';
import { getNotesThunkCreator, setCompleteThunkCreator } from '../../../redux/reducers/notesReducer';
import { compose } from 'redux';
import withErrorBoundary from '../../HOCs/withErrorBoundary';
import Notes from './notes';

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
        setComplete: (id) => {
            dispatch(setCompleteThunkCreator(id));
        },
    }
}

export default compose( withErrorBoundary,
                        connect(mapStateToProps, mapDispatchToProps),
                        )(Notes);