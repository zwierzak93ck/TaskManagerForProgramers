import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MainContent } from '../../components/layout/MainContent'

class MainContentContainer extends Component {
    render() {
        return (
            <MainContent auth={this.props.auth}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(MainContentContainer)