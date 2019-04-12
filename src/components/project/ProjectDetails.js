import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, CardActionArea, CardActions, Button } from '@material-ui/core';

export const ProjectDetails = (props) => {
    const {name, description, date} = props;
    return (
        <Card className="flex-container">
        <CardContent className="card-content">
                <h2 className="title">{name}</h2>
                <div>{description}</div>
                <div>{date.toLocaleDateString()}</div> 
                </CardContent>
        </Card>
    )
}