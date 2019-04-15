import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField, CardActions, Button } from '@material-ui/core';

export const UpdateDisplayName = (props) => {

    const { updateDisplayName, valueChange, newDisplayName, newDisplayNameError } = props;
    return (
        <Card className="flex-container">
            <CardContent className="card-content">
                <h1 className="title">Change Display Name</h1>
                <TextField
                    className="text-field"
                    placeholder="New Display Name"
                    value={newDisplayName}
                    onChange={valueChange}
                    name="newDisplayName"
                />
                <div className="error">{newDisplayNameError}</div>
            </CardContent>

            <CardActions className="card-actions">
                <Button
                    onClick={updateDisplayName}
                    className="button"
                    color="primary"
                    variant="contained"
                    size="large"
                    children="Change Display Name"
                />
            </CardActions>
        </Card>
    )
}