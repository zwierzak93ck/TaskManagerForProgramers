import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SendEmailVerification } from '../../components/account/SendEmailVerification';
import { sendEmailVerification } from '../../store/actions/accountActions';


class SendEmailVerificationContainer extends Component {

    sendEmailVerification = () => {
        this.props.sendEmailVerification();
    }

    render() {
        return (
            <SendEmailVerification
                sendEmailVerification={this.sendEmailVerification}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendEmailVerification: () => { dispatch(sendEmailVerification()) }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SendEmailVerificationContainer);