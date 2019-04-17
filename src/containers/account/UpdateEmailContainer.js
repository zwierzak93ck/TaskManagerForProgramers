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
            properties: {
                password: '',
                passwordError: '',
                newEmail: ''
            },

            errors: {
                newEmailError: '',
                confirmNewEmail: '',
                confirmNewEmailError: ''
            }
        }
    }

    updateEmail = () => {
        const { properties } = this.state
        if (this.isValid()) {
            this.props.updateEmail({
                newEmail: properties.newEmail,
                password: properties.password
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
                newEmailError: setEmailError(emailRegExp, properties.newEmail),
                confirmNewEmailError: setError(!compareValues([properties.newEmail, properties.confirmNewEmail]), 'The above values are not the same'),
                passwordError: setPasswordError(passwordRegExp, properties.password)
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
            testRegularExpression(passwordRegExp, properties.password) &&
            testRegularExpression(emailRegExp, properties.newEmail) &&
            compareValues([properties.newEmail, properties.confirmNewEmail]);
    }

    render() {
        const { properties, errors } = this.state;
        return (
            <UpdateEmail
                password={properties.password}
                newEmail={properties.newEmail}
                confirmNewEmail={properties.confirmNewEmail}

                passwordError={errors.passwordError}
                newEmailError={errors.newEmailError}
                confirmNewEmailError={errors.confirmNewEmailError}

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