import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateDisplayName } from '../../components/account/UpdateDisplayName';
import { updateDisplayName } from '../../store/actions/accountActions';
import { isNotNull } from '../../services/Validation';
import { setError } from '../../services/Error';
import SnackbarMessageContainer from '../layout/NotificationContainer';

class UpdateDisplayNameContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            properties: {
                newDisplayName: ''
            },
            errors: {
                newDisplayNameError: ''
            }
        }
    }

    updateDisplayName = () => {
        const { properties } = this.state;
        if (this.isValid()) {
            this.props.updateDisplayName(properties.newDisplayName);
        }
        else {
            this.setErrors()
        }
    }

    setErrors = () => {
        const { properties, errors } = this.state;
        this.setState({
            errors: {
                ...errors,
                newDisplayNameError: setError(!properties.newDisplayName, 'Value cannot be empty')
            }
        })
    }

    changeValue = (e) => {
        const { properties } = this.state;
        this.setState({
            properties: {
                ...properties,
                [e.target.name]: e.target.value
            }
        })
    }

    isValid = () => {
        const { properties } = this.state;
        return isNotNull(Array.from(Object.values(properties)));
    }

    render() {
        const { properties, errors } = this.state
        return (
            <UpdateDisplayName
                newDisplayName={properties.newDisplayName}

                newDisplayNameError={errors.newDisplayNameError}

                onDisplayNameUpdate={this.updateDisplayName}
                onValueChange={this.changeValue}
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDisplayName: (newDisplayName) => (dispatch(updateDisplayName(newDisplayName)))
    }
}

export default connect(null, mapDispatchToProps)(UpdateDisplayNameContainer)