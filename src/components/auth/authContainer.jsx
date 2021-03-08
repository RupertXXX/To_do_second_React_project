import { connect } from 'react-redux';
import { compose } from 'redux';
import withErrorBoundary from '../HOCs/withErrorBoundary';
import Auth from './auth';

let mapStateToProps = (state) => {
    return {
        isLogin: state.user.isLogin,
    }
}

export default compose( withErrorBoundary,
                        connect(mapStateToProps, null),
                        )(Auth);