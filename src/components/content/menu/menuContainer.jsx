import { connect } from 'react-redux';
import { getUserThunkCreator } from '../../../redux/reducers/userReducer';
import { getImageThunkCreator } from '../../../redux/reducers/userReducer';
import { compose } from 'redux';
import withErrorBoundary from '../../HOCs/withErrorBoundary';
import Menu from './menu';

let mapStateToProps = (state) => {
    return ({
        userData: state.user.userData,
        photo: state.user.photo,
    })
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => {
            dispatch(getUserThunkCreator());
        },
        getImage: () => {
            dispatch(getImageThunkCreator());
        },
    }
}

export default compose( withErrorBoundary,
                        connect(mapStateToProps, mapDispatchToProps),
                        )(Menu);