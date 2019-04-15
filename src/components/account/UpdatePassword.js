import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField, CardActions, Button } from '@material-ui/core';

export const UpdatePassword = (props) => {

    const { updatePassword, valueChange, oldPassword, newPassword, confirmNewPassword, oldPasswordError, newPasswordError, confirmNewPasswordError } = props;
    return (
        <Card className="flex-container">
            <CardContent className="card-content">
                <h1 className="title">Change Password</h1>
                <TextField
                    className="text-field"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={valueChange}
                    name="oldPassword" 
                    />
                    <div className="error">{oldPasswordError}</div>
                <TextField
                    className="text-field"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={valueChange}
                    name="newPassword"
                />
                <div className="error">{newPasswordError}</div>
                <TextField
                    className="text-field"
                    placeholder="Email"
                    value={confirmNewPassword}
                    onChange={valueChange}
                    name="confirmNewPassword"
                />
                <div className="error">{confirmNewPasswordError}</div>
            </CardContent>

            <CardActions className="card-actions">
                <Button
                    onClick={updatePassword}
                    className="button"
                    color="primary"
                    variant="contained"
                    size="large"
                    children="Change password"
                />
            </CardActions>
        </Card>
    )
}