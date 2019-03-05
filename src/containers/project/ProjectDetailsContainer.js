import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProjectDetails } from  '../../components/project/ProjectDetails';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class ProjectDetailsContainer extends Component {
    render() {
        console.log(this.props)
        const id = this.props.match.params.id;
        return (
            this.props.auth.isEmpty ? 
            <Redirect to="/signIn" /> :
            this.props.projects ? 
            this.props.projects.map(project => (
             <ProjectDetails key={id} id={id} name={project.name} description={project.description} date={new Date(project.date.seconds * 1000)} />
            )) : null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props =>    
        [{
        collection: 'projects',
        where: [['userId', '==', props.auth.uid ? props.auth.uid : null]]
    }])
)(ProjectDetailsContainer);