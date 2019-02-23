import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProjectDetails } from  '../../components/project/ProjectDetails';
import { Redirect } from 'react-router-dom';

class ProjectDetailsContainer extends Component {
    render() {
        return (
            this.props.auth.isEmpty ? 
            <Redirect to="/signIn" /> :
            <ProjectDetails />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ProjectDetailsContainer);