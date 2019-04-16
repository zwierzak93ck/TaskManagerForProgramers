import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SendEmailVerificationContainer from '../account/SendEmailVerificationContainer';
import { CreateProject } from '../../components/project/CreateProject';
import { sendEmailVerification } from '../../store/actions/accountActions';
import { createProject } from '../../store/actions/projectActions';
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

    onValueChange = (e) => {
        if (e.target) {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
        else {
            this.setState({
                date: e
            });
        }
    }

    setErrors = () => {
        this.setState({
            nameError: setError(!this.state.name, 'Value cannot be empty'),
            descriptionError: setError(!this.state.description, 'Value cannot be empty'),
            dateError: setError(!this.state.date, 'Value cannot be empty')
        });
    }

    isValid = () => {
        return isNotNull(Array.from(Object.values(this.state)))
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
            this.setErrors();
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

                        nameError={this.state.nameError}
                        descriptionError={this.state.descriptionError}
                        dateError={this.state.descriptionError}

                        onValueChange={this.onValueChange}
                        onProjectCreate={this.createProject}
                    /> : <SendEmailVerificationContainer />
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



export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectContainer);