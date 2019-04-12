import React, {Component} from 'react';
import {connect} from 'react-redux';
import {UpdateDisplayName} from '../../components/account/UpdateDisplayName';
import {updateDisplayName} from '../../store/actions/accountActions';

class UpdateDisplayNameContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newDisplayName: ''
        }
    }
    render() {
        return (
            <UpdateDisplayName 
                valueChange={this.valueChange}
                newDisplayName={this.state.newDisplayName}
                updateDisplayName={this.updateDisplayName}
            />
        )
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateDisplayName = () => {
        this.props.updateDisplayName(this.state.newDisplayName);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDisplayName: (newDisplayName) => (dispatch(updateDisplayName(newDisplayName)))
    }
}

export default connect(null, mapDispatchToProps)(UpdateDisplayNameContainer)