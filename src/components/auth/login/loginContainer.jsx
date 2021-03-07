import { connect } from 'react-redux';
import { loginThunkCreator, logoutThunkCreator } from '../../../redux/reducers/userReducer';
import { compose } from 'redux';
import withErrorBoundary from '../../HOCs/withErrorBoundary';
import Login from './login';

let mapStateToProps = (state) => {
    return ({
        isLogin: state.user.isLogin,
        errors: state.user.messages.filter((el) => el.spot="login"),
    })
}

let mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (email, password) => {
            dispatch(loginThunkCreator(email, password));
        },
        logoutUser: () => {
            dispatch(logoutThunkCreator());
        },
    }
}

export default compose( withErrorBoundary,
                        connect(mapStateToProps, mapDispatchToProps),
                        )(Login);