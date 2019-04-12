import React, {Component} from 'react';
import {connect} from 'react-redux';
import {UpdateEmail} from '../../components/account/UpdateEmail';
import {updateEmail} from '../../store/actions/accountActions';

class UpdateEmailContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            newEmail: '',
            newEmailConfirm: ''
        }
    }
    render() {
        return (
            <UpdateEmail
                valueChange={this.valueChange}
                password={this.state.password}
                newEmail={this.state.newEmail}
                newEmailConfirm={this.state.newEmailConfirm}
                updateEmail={this.updateEmail}
            />
        )
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateEmail = () => {
        this.props.updateEmail(
            {
                newEmail: this.state.newEmail,
                password: this.state.password
            }
            
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateEmail: (newEmail, password) => (dispatch(updateEmail(newEmail, password)))
    }
}

export default connect(null, mapDispatchToProps)(UpdateEmailContainer)