import React, { Component } from 'react';
import { SignUp } from '../../components/auth/SignUp';
import {connect} from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class SignUpContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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

    render() {
        return (
            <SignUp
            email={this.state.email}
            password={this.state.password}
            nickName={this.state.nickName}
            signUp={this.signUp}
            valueChange={this.valueChange}
            ></SignUp>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUserData) => (dispatch(signUp(newUserData)))
    }
}

export default connect(null, mapDispatchToProps)(SignUpContainer)