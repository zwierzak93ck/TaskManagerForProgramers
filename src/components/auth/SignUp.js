import React from 'react';
import { TextField, Button, CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';

export const SignUp = (props) => {
    const {
        email,
        confirmEmail,
        password,
        confirmPassword,
        nickName,

        emailError,
        confirmEmailError,
        passwordError,
        confirmPasswordError,
        nickNameError,

        onSignUp,
        onValueChange
    } = props;
    return (
        <Card className="flex-container">
            <CardContent className="card-content">
                <h1 className="title">Sign Up</h1>

                <TextField
                    className="text-field"
                    placeholder="Email"
                    value={email}
                    onChange={onValueChange}
                    name="email"
                />
                <div className="error">{emailError}</div>

                <TextField
                    className="text-field"
                    placeholder="Confirm Email"
                    value={confirmEmail}
                    onChange={onValueChange}
                    name="confirmEmail"
                />
                <div className="error">{confirmEmailError}</div>

                <TextField
                    className="text-field"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={onValueChange}
                    name="password"
                />
                <div className="error">{passwordError}</div>

                <TextField
                    className="text-field"
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={onValueChange}
                    name="confirmPassword"
                />
                <div className="error">{confirmPasswordError}</div>

                <TextField
                    className="text-field"
                    placeholder="User Name"
                    value={nickName}
                    onChange={onValueChange}
                    name="nickName"
                />
                <div className="error">{nickNameError}</div>
            </CardContent>

            <CardActions className="card-actions">
                <Link to="/signIn">
                    <Button
                        className="button"
                        color="primary"
                        size="medium"
                        children="Sign In"
                    />
                </Link>
                
                <Button
                    onClick={onSignUp}
                    variant="contained"
                    color="primary"
                    size="large"
                    className="button"
                    children="Sign Up"
                />
            </CardActions>
        </Card>
    )
}