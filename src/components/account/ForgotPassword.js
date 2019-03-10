import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, TextField, CardActionArea, CardActions, Button } from '@material-ui/core';

export const ForgotPassword = (props) => {
    return (
    <Card className="auth-flex-container">
    <CardContent className="card-content">
            <h1 className="title">Sign In</h1>
            <TextField className="text-field" placeholder="Email" value={props.email} onChange={props.valueChange} name="email"></TextField>
        
    </CardContent>
        <CardActions className="card-actions">
            <Button onClick={props.sendPasswordResetEmail} className="button" color="primary" variant="contained" size="large">Send Email</Button>
        </CardActions>
</Card>
    )
}