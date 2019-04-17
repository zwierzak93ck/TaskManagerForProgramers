import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateEmail } from '../../components/account/UpdateEmail';
import { updateEmail } from '../../store/actions/accountActions';
import { testRegularExpression, isNotNull, compareValues } from '../../services/Validation';
import { setError, setPasswordError, setEmailError } from '../../services/Error';
import { emailRegExp, passwordRegExp } from '../../consts';

class UpdateEmailContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            passwordError: '',
            newEmail: '',

            newEmailError: '',
            confirmNewEmail: '',
            confirmNewEmailError: ''
        }
    }

    updateEmail = () => {
        if (this.isValid) {
            this.props.updateEmail({
                newEmail: this.state.newEmail,
                password: this.state.password
            }

            );
        }
        else {
            this.setErrors();
        }

    }

    setErrors = () => {
        this.setState({
            newEmailError: setEmailError(emailRegExp, this.state.newEmail),
            confirmNewEmailError: setError(!compareValues([this.state.newEmail, this.state.confirmNewEmail]), 'The above values are not the same'),
            passwordError: setPasswordError(passwordRegExp, this.state.password)
        });
    }

    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    isValid = () => {
        return isNotNull(Array.from(Object.values(this.state))) &&
            testRegularExpression(passwordRegExp, this.state.password) &&
            testRegularExpression(emailRegExp, this.state.newEmail) &&
            compareValues([this.state.newEmail, this.state.confirmNewEmail]);
    }

    render() {
        return (
            <UpdateEmail
                password={this.state.password}
                newEmail={this.state.newEmail}
                confirmNewEmail={this.state.confirmNewEmail}

                passwordError={this.state.passwordError}
                newEmailError={this.newEmailError}
                confirmNewEmailError={this.confirmNewEmailError}

                onEmailUpdate={this.updateEmail}
                onValueChange={this.changeValue}
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateEmail: (newEmail, password) => (dispatch(updateEmail(newEmail, password)))
    }
}

export default connect(null, mapDispatchToProps)(UpdateEmailContainer)