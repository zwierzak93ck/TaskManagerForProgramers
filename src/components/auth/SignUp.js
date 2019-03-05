import React from 'react';
import { FormControl, TextField, Button, CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';

export const SignUp = (props) => {
    return (
                <Card className="auth-flex-container">
                <CardContent className="card-content">
                <h1 className="title">Sign Up</h1>
                <TextField className="text-field" placeholder="Email" value={props.email} onChange={props.valueChange} name="email"></TextField>
             <TextField className="text-field" placeholder="Password" type="password" value={props.password} onChange={props.valueChange} name="password"></TextField>
             <TextField className="text-field" placeholder="User Name" value={props.nickName} onChange={props.valueChange} name="nickName"></TextField>
                    
                    
                </CardContent>
                    <CardActions className="card-actions">
                    <Link to="/signIn"><Button className="button" color="primary" size="medium">Sign In</Button></Link>
                        <Button onClick={props.signUp} variant="contained" color="primary" size="large" className="button">Sign Up</Button>
                    </CardActions>
            </Card>
    )
}