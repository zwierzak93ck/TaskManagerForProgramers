import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField, CardActions, Button } from '@material-ui/core';

export const UpdateEmail = (props) => {

    const { updateEmail, valueChange, password, newEmail, confirmNewEmail, isValid } = props;
    return (
        <Card className="flex-container">
            <CardContent className="card-content">
                <h1 className="title">Change Email</h1>
                <TextField
                    className="text-field"
                    placeholder="Password"
                    value={password}
                    onChange={valueChange}
                    name="password"
                />
                <TextField
                    className="text-field"
                    placeholder="New Email"
                    value={newEmail}
                    onChange={valueChange}
                    name="newEmail"
                />
                <TextField
                    className="text-field"
                    placeholder="Email"
                    value={confirmNewEmail}
                    onChange={valueChange}
                    name="newEmailConfirm"
                />
            </CardContent>

            <CardActions className="card-actions">
                <Button
                    onClick={updateEmail}
                    className="button"
                    color="primary"
                    variant="contained"
                    size="large"
                    disabled={!isValid}
                    children="Change Email"
                />
            </CardActions>
        </Card>
    )
}