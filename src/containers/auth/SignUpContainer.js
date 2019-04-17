import React, { Component } from 'react';
import { SignUp } from '../../components/auth/SignUp';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { testRegularExpression, isNotNull, compareValues } from '../../services/Validation';
import { setEmailError, setPasswordError, setError } from '../../services/Error'
import { emailRegExp, passwordRegExp } from '../../consts';

class SignUpContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            properties: {
                email: '',
                confirmEmail: '',
                password: '',
                confirmPassword: '',
                nickName: ''
            },

            errors: {
                emailError: '',
                confirmEmailError: '',
                passwordError: '',
                confirmPasswordError: '',
                nickNameError: ''
            }
        }
    }

    signUp = () => {
        const {properties} = this.state;
        console.log(this.isValid())
        if (this.isValid()) {
            console.log('dfds')
            this.props.signUp({
                email: properties.email,
                password: properties.password,
                nickName: properties.nickName
            });
        }
        else {
            this.setErrors();
        }
    }

    setErrors = () => {
        const {properties, errors} = this.state;
        this.setState({
            errors: {
                ...errors,
                emailError: setEmailError(emailRegExp, properties.email),
                confirmEmailError: setError(!compareValues([properties.email, properties.confirmEmail]), 'The above values are not the same'),
                passwordError: setPasswordError(passwordRegExp, properties.password),
                confirmPasswordError: setError(!compareValues([properties.password, properties.confirmPassword]), 'The above values are not the same'),
                nickNameError: setError(!properties.nickName, 'Value cannot be empty')
            }
        });
    }

    changeValue = (e) => {
        const {properties} = this.state;
        this.setState({
            properties: {
                ...properties,
                [e.target.name]: e.target.value
            }
        })
    }

    isValid = () => {
        const {properties} = this.state;
        return isNotNull(Array.from(Object.values(properties))) &&
            testRegularExpression(emailRegExp, properties.email) &&
            testRegularExpression(passwordRegExp, properties.password) &&
            compareValues([properties.email, properties.confirmEmail]) &&
            compareValues([properties.password, properties.confirmPassword]);
    }

    render() {

        const { properties, errors } = this.state;
        const {authError} = this.props;
        return (
            <SignUp
                email={properties.email}
                confirmEmail={properties.confirmEmail}
                password={properties.password}
                confirmPassword={properties.confirmPassword}
                nickName={properties.nickName}

                emailError={errors.emailError}
                confirmEmailError={errors.confirmEmailError}
                passwordError={errors.passwordError}
                confirmPasswordError={errors.confirmPasswordError}
                nickNameError={errors.nickNameError}
                authError={authError}

                onSignUp={this.signUp}
                onValueChange={this.changeValue}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUserData) => (dispatch(signUp(newUserData)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)