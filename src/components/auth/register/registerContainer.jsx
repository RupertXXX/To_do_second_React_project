import { connect } from 'react-redux';
import { registerThunkCreator } from '../../../redux/reducers/userReducer';
import { compose } from 'redux';
import withErrorBoundary from '../../HOCs/withErrorBoundary';
import Register from './register';

let mapStateToProps = (state) => {
    return {
        isLogin: state.user.isLogin,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (name, email, password, age) => {
            dispatch(registerThunkCreator(name, email, password, age));
        },
    }
}

export default compose( withErrorBoundary,
                        connect(mapStateToProps, mapDispatchToProps),
                        )(Register);