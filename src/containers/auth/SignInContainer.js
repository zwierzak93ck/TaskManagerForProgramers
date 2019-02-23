import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SignIn} from '../../components/auth/SignIn';
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom';

class SignInContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    signIn = () => {
        this.props.signIn({
            email: this.state.email,
            password: this.state.password
        })
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <SignIn valueChange={this.valueChange} email={this.state.email} password={this.state.password} signIn={this.signIn} />
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
        signIn: (userData) => (dispatch(signIn(userData)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);