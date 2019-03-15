import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CreateProject } from  '../../components/project/CreateProject';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../store/actions/projectActions';
import { sendEmailVerification} from '../../store/actions/accountActions';
import SendEmailVerificationContainer from '../account/SendEmailVerificationContainer';

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
        });
    }

    dateChange = (e) => {
        this.setState({
            date: e
        });
    }

    createProject = () => {
        this.props.createProject({
            name: this.state.name,
            description: this.state.description,
            date: this.state.date
        });
    }

    sendEmailVerification = () => {
        this.props.sendEmailVerification();
    }

    render() {
        console.log(this.props.auth)
        return(
            this.props.auth.isEmpty ? 
            <Redirect to="/signIn" /> :
            this.props.auth.emailVerified ? 
            <CreateProject title={this.state.projectName} description={this.state.description} date={this.state.date} onValueChange={this.valueChange} onDateChange={this.dateChange} onProjectCreate={this.createProject}/> 
            : <SendEmailVerificationContainer />
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
        createProject: (project) => (dispatch(createProject(project))),
        sendEmailVerification: () => (dispatch(sendEmailVerification()))
    }
}



export default connect (mapStateToProps, mapDispatchToProps)(CreateProjectContainer);