import React, { Component } from 'react';
import { SignUp } from '../../components/auth/SignUp';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { testRegularExpression, isNotNull, compareValues } from '../../services/Validation';
import { emailRegExp, passwordRegExp } from '../../consts';
import {setEmailError, setPasswordError, setError} from '../../services/Error'

class SignUpContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            confirmEmail: '',
            confirmEmailError: '',
            password: '',
            passwordError: '',
            confirmPassword: '',
            confirmPasswordError: '',
            nickName: '',
            nickNameError: ''
        }
    }

    signUp = () => {
        if (this.isValid()) {
            this.props.signUp({
                email: this.state.email,
                password: this.state.password,
                nickName: this.state.nickName
            })
        }
        else {
            console.log(setError(!compareValues([this.state.password, this.state.confirmPassword]), 'The above Values are not the same'))
            this.setState({
                emailError: setEmailError(emailRegExp, this.state.email),
                confirmEmailError: setError(!compareValues([this.state.email, this.state.confirmEmail]), 'The above values are not the same'),
                passwordError: setPasswordError(passwordRegExp, this.state.password),
                confirmPasswordError: setError(!compareValues([this.state.password, this.state.confirmPassword]), 'The above values are not the same'),
                nickNameError: setError(!this.state.nickName, 'Value cannot be empty')
            })
        }
    }

    valueChange = (e) => {
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
                signUp={this.signUp}
                valueChange={this.valueChange}
                authError={this.props.authError}
                isValid={this.isValid()}
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