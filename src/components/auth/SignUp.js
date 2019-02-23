import React from 'react';
import { FormControl, TextField, Button, CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const SignUp = (props) => {
    return (
        // <div>
        //     <TextField placeholder="Email" value={props.email} onChange={props.valueChange} name="email"></TextField>
        //     <TextField placeholder="Password" type="password" value={props.password} onChange={props.valueChange} name="password"></TextField>
        //     <TextField placeholder="User Name" value={props.nickName} onChange={props.valueChange} name="nickName"></TextField>
        // <Button onClick={props.signUp} variant="contained" color="primary" size="medium" className="button">Sign Up</Button>
        // </div>
                <Card className="auth-flex-container">
                <CardContent className="card-content">
                <TextField placeholder="Email" value={props.email} onChange={props.valueChange} name="email"></TextField>
             <TextField placeholder="Password" type="password" value={props.password} onChange={props.valueChange} name="password"></TextField>
             <TextField placeholder="User Name" value={props.nickName} onChange={props.valueChange} name="nickName"></TextField>
                    
                    
                </CardContent>
                    <CardActions className="card-actions">
                        <Button onClick={props.signUp} variant="contained" color="primary" size="medium" className="button">Sign Up</Button>
                    </CardActions>
            </Card>
    )
}