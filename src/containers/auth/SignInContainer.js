import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SignIn} from '../../components/auth/SignIn';
import {signIn} from '../../store/actions/authActions'

class SignInContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    signIn = () => {
        console.log('dsf');
        this.props.signIn({
            email: this.state.email,
            password: this.state.password
        })
    }

    valueChange = (e) => {
        console.log(e)
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
    console.log(state)
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