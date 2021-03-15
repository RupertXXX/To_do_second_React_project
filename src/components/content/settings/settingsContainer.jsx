import { connect } from 'react-redux';
import { logoutThunkCreator, 
         updateUserThunkCreator,
         deleteUserThunkCreator,
         setImageThunkCreator } from '../../../redux/reducers/userReducer';
import { compose } from 'redux';
import withErrorBoundary from '../../HOCs/withErrorBoundary';
import Settings from './settings';

let mapStateToProps = (state) => {
    return ({
        isLogin: state.user.isLogin,
        userData: state.user.userData,
    })
}

let mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => {
            dispatch(logoutThunkCreator());
        },
        updateUser: (name, email, password, age) => {
            dispatch(updateUserThunkCreator(name, email, password, age));
        },
        setImage: () => {
            dispatch(setImageThunkCreator());
        },
        deleteUser: () => {
            dispatch(deleteUserThunkCreator());
        },
    }
}

export default compose( withErrorBoundary,
                        connect(mapStateToProps, mapDispatchToProps),
                        )(Settings);