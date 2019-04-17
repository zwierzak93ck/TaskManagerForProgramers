import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ForgotPassword } from '../../components/account/ForgotPassword'
import { sendPasswordResetEmail } from '../../store/actions/accountActions';
import { testRegularExpression, isNotNull } from '../../services/Validation';
import { setEmailError } from '../../services/Error';
import { emailRegExp } from '../../consts';
import { error } from 'util';

class ForgotPasswordcontainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            properties: {
                email: ''
            },

            errors: {
                emailError: ''
            }
        }
    }

    sendPasswordResetEmail = () => {
        const { properties } = this.state;
        if (this.isValid()) {
            this.props.sendPasswordResetEmail({
                properties: {
                    ...properties,
                    email: this.state.email
                }
            });
        }
        else {
            this.setErrors();
        }
    }

    setErrors = () => {
        const { properties, errors } = this.state;
        this.setState({
            errors: {
                ...errors,
                emailError: setEmailError(emailRegExp, properties.email)
            }
        });
    }

    changeValue = (e) => {
        const { properties } = this.state;
        this.setState({
            properties: {
                ...properties,
                [e.target.name]: e.target.value
            }
        })
    }

    isValid = () => {
        const { properties } = this.state;
        return isNotNull(Array.from(Object.values(properties))) &&
            testRegularExpression(emailRegExp, properties.email)
    }

    render() {
        const { properties, errors } = this.state;
        return (
            <ForgotPassword
                email={properties.email}

                emailError={errors.emailError}

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