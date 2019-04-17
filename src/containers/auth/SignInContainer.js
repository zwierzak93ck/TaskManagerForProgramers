import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignIn } from '../../components/auth/SignIn';
import { signIn } from '../../store/actions/authActions';
import { testRegularExpression, isNotNull } from '../../services/Validation';
import { setEmailError, setPasswordError } from '../../services/Error';
import { emailRegExp, passwordRegExp } from '../../consts';

class SignInContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            properties: {

                email: '',
                password: ''
            },

            errors: {
                emailError: '',
                passwordError: ''
            }
        }
    }

    signIn = () => {
        const {properties} = this.state;
        if (this.isValid()) {
            this.props.signIn({
                email: properties.email,
                password: properties.password
            });
        }
        else {
            this.setErrors();
        }
    }

    setErrors = () => {
        const {properties, errors} = this.state;
        this.setState({
            errors: {
                ...errors,
                emailError: setEmailError(emailRegExp, properties.email),
                passwordError: setPasswordError(passwordRegExp, properties.password)
            } 
        });
    }

    changeValue = (e) => {
        const {properties} = this.state;
        this.setState({
            properties: {
                ...properties,
                [e.target.name]: e.target.value
            }
        })
    }

    isValid = () => {
        const {properties} = this.state;
        return isNotNull(Array.from(Object.values(properties))) &&
            testRegularExpression(emailRegExp, properties.email) &&
            testRegularExpression(passwordRegExp, properties.password);
    }

    render() {
        const {properties, errors} = this.state;
        const {authError, accountError} = this.props;
        return (
            <SignIn
                email={properties.email}
                password={properties.password}

                emailError={errors.emailError}
                passwordError={errors.passwordError}
                authError={authError}
                accountError={accountError}

                onSignIn={this.signIn}
                onValueChange={this.changeValue}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        accountError: state.account.accountError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (userData) => (dispatch(signIn(userData)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);