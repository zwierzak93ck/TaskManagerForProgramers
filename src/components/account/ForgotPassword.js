import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField, CardActions, Button } from '@material-ui/core';

export const ForgotPassword = (props) => {
    const { email, valueChange, sendPasswordResetEmail, isValid } = props
    return (
        <Card className="flex-container">
            <CardContent className="card-content">
                <h1 className="title">Sign In</h1>
                <TextField
                    className="text-field"
                    placeholder="Email"
                    value={email}
                    onChange={valueChange}
                    name="email"
                />
            </CardContent>

            <CardActions className="card-actions">
                <Button
                    onClick={sendPasswordResetEmail}
                    className="button" color="primary"
                    variant="contained" size="large"
                    disabled={!isValid}
                    children="Send Email"
                />
            </CardActions>
        </Card>
    )
}