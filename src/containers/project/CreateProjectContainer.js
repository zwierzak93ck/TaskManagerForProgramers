import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CreateProject } from '../../components/project/CreateProject';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../store/actions/projectActions';
import { sendEmailVerification } from '../../store/actions/accountActions';
import SendEmailVerificationContainer from '../account/SendEmailVerificationContainer';
import { isNotNull } from '../../services/Validation';
import { setError } from '../../services/Error';


class CreateProjectContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            date: null,
            nameError: '',
            descriptionError: '',
            dateError: ''
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
        if (this.isValid()) {
            this.props.createProject({
                name: this.state.name,
                description: this.state.description,
                date: this.state.date
            });
        }
        else {
            this.setState({
                nameError: setError(!this.state.name, 'Value cannot be empty'),
                descriptionError: setError(!this.state.description, 'Value cannot be empty'),
                dateError: setError(!this.state.date, 'Value cannot be empty')
            })
        }

    }

    render() {
        return (
            this.props.auth.isEmpty ?
                <Redirect to="/signIn" /> :
                this.props.auth.emailVerified ?
                    <CreateProject
                        title={this.state.projectName}
                        description={this.state.description}
                        date={this.state.date}
                        onValueChange={this.valueChange}
                        onDateChange={this.dateChange}
                        onProjectCreate={this.createProject}
                        nameError={this.state.nameError}
                        descriptionError={this.state.descriptionError}
                        dateError={this.state.descriptionError}
                    /> : <SendEmailVerificationContainer />
        )
    }

    isValid = () => {
        return isNotNull(Array.from(Object.values(this.state)))
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



export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectContainer);