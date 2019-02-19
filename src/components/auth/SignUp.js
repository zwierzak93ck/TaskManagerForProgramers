import React from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';

export const SignUp = (props) => {
    console.log(props)
    return (
        <div>
            <TextField value={props.email} onChange={props.valueChange} name="email"></TextField>
            <TextField value={props.password} onChange={props.valueChange} name="password"></TextField>
            <TextField value={props.nickName} onChange={props.valueChange} name="nickName"></TextField>
        <Button onClick={props.signUp}>Sign Up</Button>
        </div>
    )
}