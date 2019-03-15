import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendEmailVerification} from '../../store/actions/accountActions';
import {SendEmailVerification} from '../../components/account/SendEmailVerification';

class SendEmailVerificationContainer extends Component {
    render() {
        return (
            <SendEmailVerification 
                sendEmailVerification={this.sendEmailVerification}
            />
        )
    }

    sendEmailVerification = () => {
        this.props.sendEmailVerification();
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendEmailVerification: () => {dispatch(sendEmailVerification())}
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SendEmailVerificationContainer);