import { connect } from 'react-redux';
import { logoutThunkCreator } from '../../../redux/reducers/userReducer';
import { compose } from 'redux';
import withErrorBoundary from '../../HOCs/withErrorBoundary';
import Settings from './settings';

let mapStateToProps = (state) => {
    return ({
        isLogin: state.user.isLogin,
    })
}

let mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => {
            dispatch(logoutThunkCreator());
        },
    }
}

export default compose( withErrorBoundary,
                        connect(mapStateToProps, mapDispatchToProps),
                        )(Settings);