import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, TextField, CardActionArea, CardActions, Button } from '@material-ui/core';

export const SignIn = (props) => {
    console.log(props)
    return (
        <Card className="sign-in-flex-container">
            <CardContent className="card-content">
                
                    <TextField value={props.email} onChange={props.valueChange} name="email"></TextField>
                
                    <TextField value={props.password} onChange={props.valueChange} name="password"></TextField>
                
                
            </CardContent>
                <CardActions>
                    <Button>Sign Up</Button>
                    <Button onClick={props.signIn}>Sign In</Button>
                </CardActions>
        </Card>
    )
}