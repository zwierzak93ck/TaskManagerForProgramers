import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, TextField, CardActionArea, CardActions, Button } from '@material-ui/core';

export const SignIn = (props) => {
    console.log(props)
    return (
        <Card className="sign-in-flex-container">
            <CardContent className="card-content">
                <FormControl>
                    <TextField></TextField>
                </FormControl>
                <FormControl>
                    <TextField></TextField>
                </FormControl>
                <FormControl>
                    <TextField></TextField>
                </FormControl>
                <FormControl>
                    <TextField></TextField>
                </FormControl>
            </CardContent>
                <CardActions>
                    <Button>fsdfs</Button>
                    <Button>fsdfs</Button>
                </CardActions>
        </Card>
    )
}