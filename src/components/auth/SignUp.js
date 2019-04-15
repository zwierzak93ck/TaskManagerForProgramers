import React from 'react';
import { FormControl, TextField, Button, CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';

export const SignUp = (props) => {
    const { email, confirmEmail, password, confirmPassword, nickName, signUp, valueChange, emailError, confirmEmailError, passwordError, confirmPasswordError, nickNameError } = props;
    return (
        <Card className="flex-container">
            <CardContent className="card-content">
                <h1 className="title">Sign Up</h1>
                <TextField
                    className="text-field"
                    placeholder="Email"
                    value={email}
                    onChange={valueChange}
                    name="email"
                />
                <div className="error">{emailError}</div>
                <TextField
                    className="text-field"
                    placeholder="Confirm Email"
                    value={confirmEmail}
                    onChange={valueChange}
                    name="confirmEmail"
                />
                <div className="error">{confirmEmailError}</div>
                <TextField
                    className="text-field"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={valueChange}
                    name="password"
                />
                <div className="error">{passwordError}</div>
                <TextField
                    className="text-field"
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={valueChange}
                    name="confirmPassword"
                />
                <div className="error">{confirmPasswordError}</div>
                <TextField
                    className="text-field"
                    placeholder="User Name"
                    value={nickName}
                    onChange={valueChange}
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
                    onClick={signUp}
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