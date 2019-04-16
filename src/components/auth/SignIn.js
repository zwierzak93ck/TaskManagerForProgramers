import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField, CardActions, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const SignIn = (props) => {
    const {
        email,
        password,

        emailError,
        passwordError,

        onSignIn,
        onValueChange
    } = props;
    console.log(passwordError)
    return (
        <Card className="flex-container">
            <CardContent className="card-content">
                <h1 className="title">Sign In</h1>
                <TextField
                    className="text-field"
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={onValueChange}
                    name="email"
                />
                <div className="error">{emailError}</div>
                <TextField
                    className="text-field"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={onValueChange}
                    name="password"
                />
                <div className="error">{passwordError}</div>
            </CardContent>

            <CardActions className="card-actions">
                <Link to="/signUp">
                    <Button
                        className="button"
                        color="primary"
                        size="medium"
                        children="Sign Up"
                    />
                </Link>
                <Button
                    type="submit"
                    onClick={onSignIn}
                    className="button"
                    color="primary"
                    variant="contained"
                    size="large"
                    children="Sign In"
                />
                <Link to="/forgotPassword">
                    <Button
                        className="button"
                        color="primary"
                        size="medium"
                        children="Forgot Password?"
                    />
                </Link>
            </CardActions>
        </Card>
    )
}