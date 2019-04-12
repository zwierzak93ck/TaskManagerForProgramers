import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, TextField, CardActionArea, CardActions, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';

export const SignIn = (props) => {
    console.log(props.isValid)
    const {email, password, signIn, valueChange} = props;
    return (
        <Card className="flex-container">
            <CardContent className="card-content">
                    <h1 className="title">Sign In</h1>
                    <TextField 
                    className="text-field" 
                    placeholder="Email" 
                    type="email" 
                    value={email} 
                    onChange={valueChange} 
                    name="email" 
                    required
                    ></TextField>
                
                    <TextField className="text-field" placeholder="Password" type="password" value={password} onChange={valueChange} name="password" required></TextField>
                
                
            </CardContent>
                <CardActions className="card-actions">
                <Link to="/signUp"><Button className="button" color="primary" size="medium">Sign Up</Button></Link>
                    <Button type="submit" onClick={signIn} className="button" color="primary" variant="contained" size="large" disabled={!props.isValid}>Sign In</Button>
                    <Link to="/forgotPassword"><Button className="button" color="primary" size="medium">Forgot Password?</Button></Link>
                </CardActions>
        </Card>
    )
}