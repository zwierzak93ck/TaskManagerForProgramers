import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SendEmailVerificationContainer from '../account/SendEmailVerificationContainer';
import { CreateProject } from '../../components/project/CreateProject';
import { sendEmailVerification } from '../../store/actions/accountActions';
import { createProject } from '../../store/actions/projectActions';
import { isNotNull, isDateValid } from '../../services/Validation';
import { setError, setDateError } from '../../services/Error';


class CreateProjectContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            properties: {
                name: '',
                description: '',
                date: null
            },

            errors: {
                nameError: '',
                descriptionError: '',
                dateError: ''
            }
        }
    }

    createProject = () => {
        const {properties} = this.state;
        if (this.isValid()) {
            this.props.createProject({
                name: properties.name,
                description: properties.description,
                date: properties.date
            });
        }
        else {
            this.setErrors();
        }
    }

    changeValue = (e) => {
        const {properties} = this.state;
        if (e.target) {
            this.setState({
                properties: {
                    ...properties,
                    [e.target.name]: e.target.value
                }
            });
        }
        else {
            this.setState({
                properties: {
                    ...properties,
                    date: e
                }
            });
        }
    }

    setErrors = () => {
        const {properties, errors} = this.state;
        this.setState({
            errors: {
                ...errors,
            nameError: setError(!properties.name, 'Value cannot be empty'),
            descriptionError: setError(!properties.description, 'Value cannot be empty'),
            dateError: setDateError(properties.date)
            }
        });
    }

    isValid = () => {
        const {properties} = this.state
        return isNotNull(Array.from(Object.values([properties.name, properties.description]))) && 
        isDateValid(properties.date);
    }

    render() {
        const {properties, errors} = this.state;
        return (
            this.props.auth.isEmpty ?
                <Redirect to="/signIn" /> :
                this.props.auth.emailVerified ?
                    <CreateProject
                        title={properties.projectName}
                        description={properties.description}
                        date={properties.date}

                        nameError={errors.nameError}
                        descriptionError={errors.descriptionError}
                        dateError={errors.dateError}

                        onValueChange={this.changeValue}
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