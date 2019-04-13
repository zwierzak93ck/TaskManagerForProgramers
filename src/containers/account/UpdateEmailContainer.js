import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateEmail } from '../../components/account/UpdateEmail';
import { updateEmail } from '../../store/actions/accountActions';
import { testRegularExpression, isNotNull, compareValues } from '../../services/Validation';
import { emailRegExp } from '../../consts';

class UpdateEmailContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            newEmail: '',
            confirmNewEmail: ''
        }
    }
    render() {
        return (
            <UpdateEmail
                valueChange={this.valueChange}
                password={this.state.password}
                newEmail={this.state.newEmail}
                confirmNewEmail={this.state.confirmNewEmail}
                updateEmail={this.updateEmail}
                isValid={this.isValid()}
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

    isValid = () => {
        return isNotNull(Array.from(Object.values(this.state))) &&
            testRegularExpression(emailRegExp, this.state.newEmail) &&
            compareValues([this.state.newEmail, this.state.confirmNewEmail]);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateEmail: (newEmail, password) => (dispatch(updateEmail(newEmail, password)))
    }
}

export default connect(null, mapDispatchToProps)(UpdateEmailContainer)