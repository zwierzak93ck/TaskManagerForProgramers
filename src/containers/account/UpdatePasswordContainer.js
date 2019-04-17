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
            properties: {
                oldPassword: '',
                newPassword: '',
                confirmNewPassword: ''
            },

            errors: {
                oldPasswordError: '',
                newPasswordError: '',
                confirmNewPasswordError: ''
            }
        }
    }

    updatePassword = () => {
        const { properties } = this.state;
        if (this.isValid()) {
            this.props.updatePassword({
                newPassword: properties.newPassword,
                oldPassword: properties.oldPassword
            }
            );
        }
        else {
            this.setErrors();
        }

    }

    setErrors = () => {
        const { properties, errors } = this.state;
        console.log(setError(!compareValues([properties.newPassword, properties.confirmNewPassword]), 'The above values are not the same'))
        this.setState({
            errors: {
                ...errors,
                oldPasswordError: setError(!properties.oldPassword, 'Value cannot be empty'),
                newPasswordError: setPasswordError(passwordRegExp, properties.newPassword),
                confirmNewPasswordError: setError(!compareValues([properties.newPassword, properties.confirmNewPassword]), 'The above values are not the same'),
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
            testRegularExpression(passwordRegExp, properties.newPassword) &&
            compareValues([properties.newPassword, properties.confirmNewPassword]);
    }

    render() {
        const { properties, errors } = this.state;
        return (
            <UpdatePassword
                oldPassword={properties.oldPassword}
                newPassword={properties.newPassword}
                confirmNewPassword={properties.confirmNewPassword}

                oldPasswordError={errors.oldPasswordError}
                newPasswordError={errors.newPasswordError}
                confirmNewPasswordError={errors.confirmNewPasswordError}

                onPasswordUpdate={this.updatePassword}
                onValueChange={this.changeValue}
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