import React, { Component } from 'react';
import { SignUp } from '../../components/auth/SignUp';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { testRegularExpression, isNotNull, compareValues } from '../../services/Validation';
import { setEmailError, setPasswordError, setError } from '../../services/Error'
import { emailRegExp, passwordRegExp } from '../../consts';

class SignUpContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            nickName: '',

            emailError: '',
            confirmEmailError: '',
            passwordError: '',
            confirmPasswordError: '',
            nickNameError: ''
        }
    }

    signUp = () => {
        if (this.isValid()) {
            this.props.signUp({
                email: this.state.email,
                password: this.state.password,
                nickName: this.state.nickName
            });
        }
        else {
            this.setErrors();
        }
    }

    setErrors = () => {
        this.setState({
            emailError: setEmailError(emailRegExp, this.state.email),
            confirmEmailError: setError(!compareValues([this.state.email, this.state.confirmEmail]), 'The above values are not the same'),
            passwordError: setPasswordError(passwordRegExp, this.state.password),
            confirmPasswordError: setError(!compareValues([this.state.password, this.state.confirmPassword]), 'The above values are not the same'),
            nickNameError: setError(!this.state.nickName, 'Value cannot be empty')
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
            testRegularExpression(passwordRegExp, this.state.password) &&
            compareValues([this.state.email, this.state.confirmEmail]) &&
            compareValues([this.state.password, this.state.confirmPassword]);
    }

    render() {
        return (
            <SignUp
                email={this.state.email}
                confirmEmail={this.state.confirmEmail}
                password={this.state.password}
                confirmPassword={this.state.confirmPassword}
                nickName={this.state.nickName}

                emailError={this.state.emailError}
                confirmEmailError={this.state.confirmEmailError}
                passwordError={this.state.passwordError}
                confirmPasswordError={this.state.confirmPasswordError}
                nickNameError={this.state.nickNameError}
                authError={this.props.authError}

                onSignUp={this.signUp}
                onValueChange={this.onValueChange}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUserData) => (dispatch(signUp(newUserData)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)