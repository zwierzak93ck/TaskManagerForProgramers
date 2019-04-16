import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField, CardActions, Button } from '@material-ui/core';

export const UpdateEmail = (props) => {

    const { 
        password,
        newEmail,
        confirmNewEmail,
        
        newEmailError,
        confirmNewEmailError,
        passwordError,
        
        onEmailUpdate,
        onValueChange
    } = props;
    return (
        <Card className="flex-container">
            <CardContent className="card-content">
                <h1 className="title">Change Email</h1>

                <TextField
                    className="text-field"
                    placeholder="Password"
                    value={password}
                    onChange={onValueChange}
                    name="password"
                />
                <div className="error">{passwordError}</div>

                <TextField
                    className="text-field"
                    placeholder="New Email"
                    value={newEmail}
                    onChange={onValueChange}
                    name="newEmail"
                />
                <div className="error">{newEmailError}</div>
                
                <TextField
                    className="text-field"
                    placeholder="Email"
                    value={confirmNewEmail}
                    onChange={onValueChange}
                    name="newEmailConfirm"
                />
                <div className="error">{confirmNewEmailError}</div>
            </CardContent>

            <CardActions className="card-actions">
                <Button
                    onClick={onEmailUpdate}
                    className="button"
                    color="primary"
                    variant="contained"
                    size="large"
                    children="Change Email"
                />
            </CardActions>
        </Card>
    )
}