import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProjectList } from '../../components/project/ProjectList';
import {Redirect } from 'react-router-dom';

class ProjectListContainer extends Component {
    render() {
        return (
            this.props.auth.isEmpty ? 
            <Redirect to='/signIn' /> :
            <ProjectList />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ProjectListContainer);