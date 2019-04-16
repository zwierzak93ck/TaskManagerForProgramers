import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateDisplayName } from '../../components/account/UpdateDisplayName';
import { updateDisplayName } from '../../store/actions/accountActions';
import { isNotNull } from '../../services/Validation';
import { setError } from '../../services/Error';

class UpdateDisplayNameContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newDisplayName: '',
            newDisplayNameError: ''
        }
    }

    updateDisplayName = () => {
        if (this.isValid()) {

            this.props.updateDisplayName(this.state.newDisplayName);
        }
        else {
            this.setErrors()
        }
    }

    setErrors = () => {
        this.setState({
            newDisplayNameError: setError(!this.state.newDisplayName, 'Value cannot be empty')
        })
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    isValid = () => {
        return isNotNull(Array.from(Object.values(this.state)));
    }

    render() {
        return (
            <UpdateDisplayName
                newDisplayName={this.state.newDisplayName}

                newDisplayNameError={this.state.newDisplayNameError}

                onDisplayNameUpdate={this.updateDisplayName}
                onValueChange={this.onValueChange}
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