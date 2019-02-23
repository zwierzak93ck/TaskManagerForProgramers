import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CreateProject } from  '../../components/project/CreateProject';
import { Redirect } from 'react-router-dom';

class CreateProjectContainer extends Component {
    render() {
        return(
            this.props.auth.isEmpty ? 
            <Redirect to="/signIn" /> :
            <CreateProject />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect (mapStateToProps)(CreateProjectContainer);