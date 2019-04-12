import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, TextField, CardActionArea, CardActions, Button } from '@material-ui/core';

export const UpdateDisplayName = (props) => {
    
    const {updateDisplayName, valueChange, newDisplayName} = props;
    return (
        <Card className="flex-container">
        <CardContent className="card-content">
            <h1 className="title">Change Display Name</h1>
            <TextField className="text-field" placeholder="New Display Name" value={newDisplayName} onChange={valueChange} name="newDisplayName"></TextField>
        
    </CardContent>
            <CardActions className="card-actions">
            <Button onClick={updateDisplayName} className="button" color="primary" variant="contained" size="large">Change Display Name</Button>
            
            </CardActions>
    </Card>
    )
}