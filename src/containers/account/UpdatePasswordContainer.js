import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdatePassword } from '../../components/account/UpdatePassword';
import { updatePassword } from '../../store/actions/accountActions';
import { testRegularExpression, isNotNull, compareValues } from '../../services/Validation';
import { setPasswordError, setError } from '../../services/Error'
import { passwordRegExp } from '../../consts';

class UpdatePasswordContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',

            oldPasswordError: '',
            newPasswordError: '',
            confirmNewPasswordError: ''
        }
    }

    updatePassword = () => {
        if (this.isValid()) {
            this.props.updatePassword({
                newPassword: this.state.newPassword,
                oldPassword: this.state.oldPassword
            }
            );
        }
        else {
            this.setErrors();
        }

    }

    setErrors = () => {
        this.setState({
            oldPasswordError: setError(!this.state.oldPassword, 'Value cannot be empty'),
            newPasswordError: setPasswordError(passwordRegExp, this.state.newPassword),
            confirmNewPasswordError: setError(!compareValues([this.state.newPassword, this.state.confirmNewPassword]), 'The above values are not the same')
        }
        );
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }
        )
    }

    isValid = () => {
        return isNotNull(Array.from(Object.values(this.state))) &&
            testRegularExpression(passwordRegExp, this.state.newPassword) &&
            compareValues([this.state.newPassword, this.state.confirmNewPassword]);
    }

    render() {
        return (
            <UpdatePassword
                oldPassword={this.state.oldPassword}
                newPassword={this.state.newPassword}
                newPasswordConfirm={this.state.newPasswordConfirm}

                oldPasswordError={this.state.oldPasswordError}
                newPasswordError={this.state.newPasswordError}
                confirmNewPasswordError={this.state.confirmNewPasswordError}

                onPasswordUpdate={this.updatePassword}
                onValueChange={this.onValueChange}
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePassword: (newPassword) => (dispatch(updatePassword(newPassword)))
    }
}

export default connect(null, mapDispatchToProps)(UpdatePasswordContainer)