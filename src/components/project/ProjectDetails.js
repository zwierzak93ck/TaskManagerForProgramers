import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, CardActionArea, CardActions, Button } from '@material-ui/core';

export const ProjectDetails = (props) => {
    console.log(props)
    return (
        <Card className="auth-flex-container">
        <CardContent className="card-content">
                <h2 className="title">{props.name}</h2>
                <div>{props.description}</div>
                <div>{props.date.toLocaleDateString()}</div> 
                </CardContent>
        </Card>
    )
}