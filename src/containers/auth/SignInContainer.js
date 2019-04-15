import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignIn } from '../../components/auth/SignIn';
import { signIn } from '../../store/actions/authActions';
import { testRegularExpression, isNotNull } from '../../services/Validation';
import { emailRegExp, passwordRegExp } from '../../consts';
import {setEmailError, setPasswordError} from '../../services/Error';

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
        switch (this.isValid()) {
            case true:
                this.props.signIn({
                    email: this.state.email,
                    password: this.state.password
                })
                break;
            case false:
                this.setState({
                    emailError: setEmailError(emailRegExp, this.state.email),
                   passwordError: setPasswordError(passwordRegExp, this.state.password)
                })
                break;
            default:
                break;
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
            testRegularExpression(passwordRegExp, this.state.password);
    }

    render() {
        return (
            <SignIn
                valueChange={this.valueChange}
                email={this.state.email}
                emailError={this.state.emailError}
                password={this.state.password}
                passwordError={this.state.passwordError}
                signIn={this.signIn}
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