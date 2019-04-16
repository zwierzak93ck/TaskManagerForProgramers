import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, Button } from '@material-ui/core';

export const ProjectList = (props) => {
    const { date, name, description, id } = props;
    return (
        <Card className="flex-container">
            <CardContent className="card-content">
                <h2 className="title">{name}</h2>
                <div>{description.substring(0, 50)}</div>
                <div>{date.toLocaleDateString()}</div>
            </CardContent>

            <CardActions>
                <Link
                    to={"/projectDetails/" + id}
                    className="link">
                    <Button
                        variant="outlined"
                        color="primary"
                        children="More Details"
                    />
                </Link>
            </CardActions>
        </Card>
    )
}