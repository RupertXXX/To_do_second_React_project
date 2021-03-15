import { connect } from 'react-redux';
import { setNoteThunkCreator } from '../../../redux/reducers/notesReducer';
import { compose } from 'redux';
import withErrorBoundary from '../../HOCs/withErrorBoundary';
import AddNote from './addNote';

let mapStateToProps = (state) => {
    return ({
        errors: state.user.messages.filter((el) => el.spot="add"),
    })
}

let mapDispatchToProps = (dispatch) => {
    return {
        setNote: (description) => {
            dispatch(setNoteThunkCreator(description));
        },
    }
}

export default compose( withErrorBoundary,
                        connect(mapStateToProps, mapDispatchToProps),
                        )(AddNote);