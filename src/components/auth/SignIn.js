import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, TextField, CardActionArea, CardActions, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const SignIn = (props) => {
    return (
        <Card className="sign-in-flex-container">
            <CardContent className="card-content">
                
                    <TextField placeholder="Email" value={props.email} onChange={props.valueChange} name="email"></TextField>
                
                    <TextField placeholder="Password" type="password" value={props.password} onChange={props.valueChange} name="password"></TextField>
                
                
            </CardContent>
                <CardActions>
                <Link to="/signUp"><Button className="button" color="primary" size="small">Sign Up</Button></Link>
                    <Button onClick={props.signIn} className="button" color="primary" variant="contained" size="medium">Sign In</Button>
                </CardActions>
        </Card>
    )
}