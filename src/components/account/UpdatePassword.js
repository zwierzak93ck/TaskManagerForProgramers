import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField, CardActions, Button } from '@material-ui/core';

export const UpdatePassword = (props) => {

    const {
        onPasswordUpdate,
        oldPassword,
        newPassword,
        confirmNewPassword,

        oldPasswordError,
        newPasswordError,
        confirmNewPasswordError,

        onValueChange
    } = props;
    return (
        <Card className="flex-container">
            <CardContent className="card-content">
                <h1 className="title">Change Password</h1>

                <TextField
                    className="text-field"
                    placeholder="Old Password"
                    type="password"
                    value={oldPassword}
                    onChange={onValueChange}
                    name="oldPassword"
                />
                <div className="error">{oldPasswordError}</div>

                <TextField
                    className="text-field"
                    placeholder="New Password"
                    type="password"
                    value={newPassword}
                    onChange={onValueChange}
                    name="newPassword"
                />
                <div className="error">{newPasswordError}</div>
                
                <TextField
                    className="text-field"
                    placeholder="Confirm New Password"
                    type="password"
                    value={confirmNewPassword}
                    onChange={onValueChange}
                    name="confirmNewPassword"
                />
                <div className="error">{confirmNewPasswordError}</div>
            </CardContent>

            <CardActions className="card-actions">
                <Button
                    onClick={onPasswordUpdate}
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