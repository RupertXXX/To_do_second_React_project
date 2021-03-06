import { connect } from 'react-redux';
import { loginThunkCreator } from '../../../redux/reducers/userReducer';
import { compose } from 'redux';
import withErrorBoundary from '../../HOCs/withErrorBoundary';
import Login from './login';

let mapStateToProps = (state) => {
    return ({})
}

let mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (email, password) => {
            dispatch(loginThunkCreator(email, password));
        },
    }
}

export default compose( withErrorBoundary,
                        connect(mapStateToProps, mapDispatchToProps),
                        )(Login);