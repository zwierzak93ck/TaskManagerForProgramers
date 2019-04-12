import React from 'react';
import { FormControl, TextField, Button, CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';

export const SignUp = (props) => {
    const {email, confirmEmail, password, confirmPassword, nickName, signUp, valueChange} = props;
    return (
                <Card className="flex-container">
                <CardContent className="card-content">
                <h1 className="title">Sign Up</h1>
                <TextField className="text-field" placeholder="Email" value={email} onChange={valueChange} name="email"></TextField>
                <TextField className="text-field" placeholder="Confirm Email" value={confirmEmail} onChange={valueChange} name="confirmEmail"></TextField>

             <TextField className="text-field" placeholder="Password" type="password" value={password} onChange={valueChange} name="password"></TextField>
             <TextField className="text-field" placeholder="Confirm Password" type="password" value={confirmPassword} onChange={valueChange} name="confirmPassword"></TextField>

             <TextField className="text-field" placeholder="User Name" value={nickName} onChange={valueChange} name="nickName"></TextField>
                    
                    
                </CardContent>
                    <CardActions className="card-actions">
                    <Link to="/signIn"><Button className="button" color="primary" size="medium">Sign In</Button></Link>
                        <Button onClick={signUp} variant="contained" color="primary" size="large" className="button" disabled={!props.isValid}>Sign Up</Button>
                    </CardActions>
            </Card>
    )
}