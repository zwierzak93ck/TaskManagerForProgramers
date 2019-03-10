import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ForgotPassword} from '../../components/account/ForgotPassword'
import {sendPasswordResetEmail} from '../../store/actions/accountActions';

class ForgotPasswordcontainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
        }
    }

    render() {
        return (
            <ForgotPassword 
                email={this.state.email}
                valueChange={this.valueChange}
                sendPasswordResetEmail={this.sendPasswordResetEmail}
            />
        )
    }

    sendPasswordResetEmail = () => {
        this.props.sendPasswordResetEmail({
            email: this.state.email
        })
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
            
        sendPasswordResetEmail: (email) => (dispatch(sendPasswordResetEmail(email)))
    }
}

export default connect(null, mapDispatchToProps)(ForgotPasswordcontainer);