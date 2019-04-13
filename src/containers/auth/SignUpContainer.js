import React, { Component } from 'react';
import { SignUp } from '../../components/auth/SignUp';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { testRegularExpression, isNotNull, compareValues } from '../../services/Validation';
import { emailRegExp, passwordRegExp } from '../../consts';

class SignUpContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            nickName: ''
        }
    }

    signUp = () => {
        this.props.signUp({
            email: this.state.email,
            password: this.state.password,
            nickName: this.state.nickName
        })
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