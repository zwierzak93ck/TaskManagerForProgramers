import React, { Component } from 'react';
import { connect } from 'react-redux';
import SendEmailVerificationContainer from './SendEmailVerificationContainer';
import UpdateDisplayNameContainer from './UpdateDisplayNameContainer';
import UpdateEmailContainer from './UpdateEmailContainer';
import UpdatePasswordContainer from './UpdatePasswordContainer';

class SettingsContainer extends Component {

    render() {
        const {auth} = this.props;
        return (
            <div> {
                !auth.emailVerified ?
                    <SendEmailVerificationContainer /> :
                    <div>
                        {/* <UpdateEmailContainer /> */}
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