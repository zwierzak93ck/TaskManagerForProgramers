import React, {Component} from 'react';
import {connect} from 'react-redux';
import {UpdatePassword} from '../../components/account/UpdatePassword';
import {updatePassword} from '../../store/actions/accountActions';

class UpdatePasswordContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            oldPassword: '',
            newPassword: '',
            newPasswordConfirm: ''
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
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePassword: (newPassword) => (dispatch(updatePassword(newPassword)))
    }
}

export default connect(null, mapDispatchToProps)(UpdatePasswordContainer)