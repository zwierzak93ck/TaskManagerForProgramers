import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateDisplayName } from '../../components/account/UpdateDisplayName';
import { updateDisplayName } from '../../store/actions/accountActions';
import { isNotNull } from '../../services/Validation';
import {setError} from '../../services/Error';

class UpdateDisplayNameContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newDisplayName: '',
            newDisplayNameError: ''
        }
    }
    render() {
        return (
            <UpdateDisplayName
                valueChange={this.valueChange}
                newDisplayName={this.state.newDisplayName}
                updateDisplayName={this.updateDisplayName}
                newDisplayNameError={this.state.newDisplayNameError}
            />
        )
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateDisplayName = () => {
        if(this.isValid()) {

            this.props.updateDisplayName(this.state.newDisplayName);
        }
        else {
            this.setState({
                newDisplayNameError: setError(!this.state.newDisplayName, 'Value cannot be empty')
            })
        }
    }

    isValid = () => {
        return isNotNull(Array.from(Object.values(this.state)));
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDisplayName: (newDisplayName) => (dispatch(updateDisplayName(newDisplayName)))
    }
}

export default connect(null, mapDispatchToProps)(UpdateDisplayNameContainer)