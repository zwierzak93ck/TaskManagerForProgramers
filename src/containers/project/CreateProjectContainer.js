import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CreateProject } from  '../../components/project/CreateProject';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../store/actions/projectActions';

class CreateProjectContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            date: null
        }
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    dateChange = (e) => {
        this.setState({
            date: e
        })
    }

    createProject = () => {
        this.props.createProject({
            name: this.state.name,
            description: this.state.description,
            date: this.state.date
        })
    }

    render() {
        return(
            this.props.auth.isEmpty ? 
            <Redirect to="/signIn" /> :
            <CreateProject title={this.state.projectName} description={this.state.description} date={this.state.date} onValueChange={this.valueChange} onDateChange={this.dateChange} onProjectCreate={this.createProject}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => (dispatch(createProject(project)))
    }
}



export default connect (mapStateToProps, mapDispatchToProps)(CreateProjectContainer);