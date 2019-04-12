import React, {Component} from 'react';
import {connect} from 'react-redux';
import SendEmailVerificationContainer from './SendEmailVerificationContainer';
import UpdatePasswordContainer from './UpdatePasswordContainer';
import UpdateDisplayNameContainer from './UpdateDisplayNameContainer';
import UpdateEmailContainer from './UpdateEmailContainer';

class SettingsContainer extends Component {
    render () {
        return (
            <div>
                {
                    !this.props.auth.emailVerified ?
                    <SendEmailVerificationContainer /> :
                    <div>
                    <UpdateEmailContainer />
                    <UpdatePasswordContainer />
                    <UpdateDisplayNameContainer />
                    </div>
                }
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(SettingsContainer);