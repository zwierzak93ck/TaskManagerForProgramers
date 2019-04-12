import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, TextField, CardActionArea, CardActions, Button } from '@material-ui/core';

export const ForgotPassword = (props) => {
    const {email, valueChange, sendPasswordResetEmail} = props
    return (
    <Card className="flex-container">
    <CardContent className="card-content">
            <h1 className="title">Sign In</h1>
            <TextField className="text-field" placeholder="Email" value={email} onChange={valueChange} name="email"></TextField>
        
    </CardContent>
        <CardActions className="card-actions">
            <Button onClick={sendPasswordResetEmail} className="button" color="primary" variant="contained" size="large">Send Email</Button>
        </CardActions>
</Card>
    )
}