import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ForgotPassword } from '../../components/account/ForgotPassword'
import { sendPasswordResetEmail } from '../../store/actions/accountActions';
import { testRegularExpression, isNotNull } from '../../services/Validation';
import { setEmailError } from '../../services/Error';
import { emailRegExp } from '../../consts';

class ForgotPasswordcontainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',

            emailError: ''
        }
    }

    sendPasswordResetEmail = () => {
        if (this.isValid) {
            this.props.sendPasswordResetEmail({
                email: this.state.email
            });
        }
        else {
            this.setErrors();
        }
    }

    setErrors = () => {
        this.setState({
            emailError: setEmailError(emailRegExp, this.state.email)
        });
    }

    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    isValid = () => {
        return isNotNull(Array.from(Object.values(this.state))) && testRegularExpression(emailRegExp, this.state.email)
    }

    render() {
        return (
            <ForgotPassword
                email={this.state.email}

                emailError={this.state.emailError}

                sendPasswordResetEmail={this.sendPasswordResetEmail}
                onValueChange={this.changeValue}
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        sendPasswordResetEmail: (email) => (dispatch(sendPasswordResetEmail(email)))
    }
}

export default connect(null, mapDispatchToProps)(ForgotPasswordcontainer);