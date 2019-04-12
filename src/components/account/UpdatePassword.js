import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, TextField, CardActionArea, CardActions, Button } from '@material-ui/core';

export const UpdatePassword = (props) => {
    
    const {updatePassword, valueChange, oldPassword, newPassword, newPasswordConfirm} = props;
    return (
        <Card className="flex-container">
        <CardContent className="card-content">
            <h1 className="title">Change Password</h1>
            <TextField className="text-field" placeholder="Old Password" value={oldPassword} onChange={valueChange} name="oldPassword"></TextField>
            <TextField className="text-field" placeholder="New Password" value={newPassword} onChange={valueChange} name="newPassword"></TextField>
            {/* <TextField className="text-field" placeholder="Email" value={newPasswordConfirm} onChange={valueChange} name="newPasswordConfirm"></TextField> */}
        
    </CardContent>
            <CardActions className="card-actions">
            <Button onClick={updatePassword} className="button" color="primary" variant="contained" size="large">Change password</Button>
            
            </CardActions>
    </Card>
    )
}