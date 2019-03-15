import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, TextField, CardActionArea, CardActions, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';

export const SignIn = (props) => {
    console.log(props)
    return (
        <Card className="auth-flex-container">
            <CardContent className="card-content">
                    <h1 className="title">Sign In</h1>
                    <TextField className="text-field" placeholder="Email" value={props.email} onChange={props.valueChange} name="email"></TextField>
                
                    <TextField className="text-field" placeholder="Password" type="password" value={props.password} onChange={props.valueChange} name="password"></TextField>
                
                
            </CardContent>
                <CardActions className="card-actions">
                <Link to="/signUp"><Button className="button" color="primary" size="medium">Sign Up</Button></Link>
                    <Button onClick={props.signIn} className="button" color="primary" variant="contained" size="large">Sign In</Button>
                    <Link to="/forgotPassword"><Button className="button" color="primary" size="medium">Forgot Password?</Button></Link>
                </CardActions>
                <div>{props.emailVerified}</div>
        </Card>
    )
}