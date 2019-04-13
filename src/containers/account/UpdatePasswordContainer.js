import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdatePassword } from '../../components/account/UpdatePassword';
import { updatePassword } from '../../store/actions/accountActions';
import { testRegularExpression, isNotNull, compareValues } from '../../services/Validation';
import { emailRegExp, passwordRegExp } from '../../consts';

class UpdatePasswordContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        }
    }
    render() {
        return (
            <UpdatePassword
                valueChange={this.valueChange}
                oldPassword={this.state.oldPassword}
                newPassword={this.state.newPassword}
                newPasswordConfirm={this.state.newPasswordConfirm}
                updatePassword={this.updatePassword}
                isValid={this.isValid()}
            />
        )
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updatePassword = () => {
        this.props.updatePassword(
            {
                newPassword: this.state.newPassword,
                oldPassword: this.state.oldPassword
            }

        );
    }

    isValid = () => {
        return isNotNull(Array.from(Object.values(this.state))) &&
            testRegularExpression(passwordRegExp, this.state.newPassword) &&
            compareValues([this.state.newPassword, this.state.confirmNewPassword]);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePassword: (newPassword) => (dispatch(updatePassword(newPassword)))
    }
}

export default connect(null, mapDispatchToProps)(UpdatePasswordContainer)