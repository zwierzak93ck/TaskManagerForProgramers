import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateEmail } from '../../components/account/UpdateEmail';
import { updateEmail } from '../../store/actions/accountActions';
import { testRegularExpression, isNotNull, compareValues } from '../../services/Validation';
import { emailRegExp, passwordRegExp } from '../../consts';
import {setError, setPasswordError, setEmailError} from '../../services/Error';

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
    render() {
        return (
            <UpdateEmail
                valueChange={this.valueChange}
                password={this.state.password}
                newEmail={this.state.newEmail}
                confirmNewEmail={this.state.confirmNewEmail}
                updateEmail={this.updateEmail}
                passwordError={this.state.passwordError}
                newEmailError={this.newEmailError}
                confirmNewEmailError={this.confirmNewEmailError}
            />
        )
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateEmail = () => {
        if (this.isValid()) {
            this.props.updateEmail(
                {
                    newEmail: this.state.newEmail,
                    password: this.state.password
                }
    
            );
        } 
        else {
            this.setState({
                newEmailError: setEmailError(emailRegExp, this.state.newEmail),
                confirmNewEmailError: setError(!compareValues([this.state.newEmail, this.state.confirmNewEmail]), 'The above values are not the same'),
                passwordError: setPasswordError(passwordRegExp, this.state.password)
            })
        }

    }

    isValid = () => {
        return isNotNull(Array.from(Object.values(this.state))) &&
            testRegularExpression(passwordRegExp, this.state.password) &&
            testRegularExpression(emailRegExp, this.state.newEmail) &&
            compareValues([this.state.newEmail, this.state.confirmNewEmail]);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateEmail: (newEmail, password) => (dispatch(updateEmail(newEmail, password)))
    }
}

export default connect(null, mapDispatchToProps)(UpdateEmailContainer)