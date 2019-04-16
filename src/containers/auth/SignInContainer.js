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
            email: '',
            password: '',

            emailError: '',
            passwordError: ''
        }
    }

    signIn = () => {
        if (this.isValid()) {
            this.props.signIn({
                email: this.state.email,
                password: this.state.password
            });
        }
        else {
            this.setErrors();
        }
    }

    setErrors = () => {
        this.setState({
            emailError: setEmailError(emailRegExp, this.state.email),
            passwordError: setPasswordError(passwordRegExp, this.state.password)
        });
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    isValid = () => {
        return isNotNull(Array.from(Object.values(this.state))) &&
            testRegularExpression(emailRegExp, this.state.email) &&
            testRegularExpression(passwordRegExp, this.state.password);
    }

    render() {
        return (
            <SignIn
                email={this.state.email}
                password={this.state.password}

                emailError={this.state.emailError}
                passwordError={this.state.passwordError}
                authError={this.props.authError}
                accountError={this.props.accountError}

                onSignIn={this.signIn}
                onValueChange={this.onValueChange}
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