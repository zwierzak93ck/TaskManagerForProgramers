import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProjectList } from '../../components/project/ProjectList';
import {Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class ProjectListContainer extends Component {
    render() {
        return (
            this.props.auth.isEmpty ? 
            <Redirect to='/signIn' /> :
            <ProjectList projects={this.props.projects}/>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(['projects'])
)(ProjectListContainer);