import React, {Component} from 'react';
import {Notification} from '../../components/layout/Notification';
import {connect} from 'react-redux';
import {closeNotification} from '../../store/actions/notificationActions';


class NotificationContainer extends Component {

    handleClose = () => {
        this.props.closeNotification();
    }

    render() {
        return(
            <Notification 
                open={this.props.open}
                message={this.props.message}
                variant={this.props.variant}
                handleClose={this.handleClose}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        open: state.notification.open,
        message: state.notification.message,
        variant: state.notification.variant
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeNotification: () => dispatch(closeNotification())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);