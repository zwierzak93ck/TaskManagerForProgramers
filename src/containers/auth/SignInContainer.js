import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignIn } from '../../components/auth/SignIn';
import { signIn } from '../../store/actions/authActions';
import { testRegularExpression, isNotNull } from '../../services/Validation';
import { emailRegExp, passwordRegExp } from '../../consts';
import { th } from 'date-fns/esm/locale';

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
                if(!this.state.email) {
                    this.setState({
                        emailError: 'Value cannot be empty.'
                    })
                }
                else {
                    if(!testRegularExpression(emailRegExp, this.state.email)) {
                        if (!this.state.email.includes('@')){   
                        this.setState({
                            emailError: 'Wrong Email. Missing "@" sign in "' + this.state.email + '".'
                        })
                        }
                        else {
                            this.setState({
                                emailError: 'Wrong Email. Missing part after "@" sign in "' + this.state.email + '".'
                            }) 
                        }
                    }
                }
                if(!this.state.password) {
                    this.setState({
                        passwordError: 'Value cannot be empty.'
                    })
                }
                else {
                    if(!testRegularExpression(passwordRegExp, this.state.password)) {
                        
                    console.log('ppdsfp')
                        this.setState({
                            passwordError: 'Wrong password. At least 6 characters, one small letter, one capital letter, one number and one special character are required.'
                        })
                    }
                }
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
                isValid={this.isValid()}
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