import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, CardActionArea, CardActions, Button } from '@material-ui/core';

export const ProjectList = (props) => {
    const {date, name, description, id} = props;
    const daysDiff = Math.round(( Date.parse(date) - Date.parse(new Date()) ) / 86400000)
    return (
        <Card className="flex-container">
        <CardContent className="card-content">
                <h2 className="title">{name}</h2>
                <div>{description.substring(0, 50)}</div>
                <div>{date.toLocaleDateString()}</div> 
                </CardContent>
                <CardActions>
                    <Link to={"/projectDetails/" + id} className="link"><Button variant="outlined" color="primary">More Details</Button></Link>
                </CardActions>
        </Card>
        
    )
}