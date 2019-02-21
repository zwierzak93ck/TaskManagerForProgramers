import React from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';

export const SignUp = (props) => {
    return (
        <div>
            <TextField placeholder="Email" value={props.email} onChange={props.valueChange} name="email"></TextField>
            <TextField placeholder="Password" type="password" value={props.password} onChange={props.valueChange} name="password"></TextField>
            <TextField placeholder="User Name" value={props.nickName} onChange={props.valueChange} name="nickName"></TextField>
        <Button onClick={props.signUp} variant="contained" color="primary" size="medium" className="button">Sign Up</Button>
        </div>
    )
}