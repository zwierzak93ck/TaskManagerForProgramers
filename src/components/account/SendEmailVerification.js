import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, Button } from '@material-ui/core';

export const SendEmailVerification = (props) => {
    const { sendEmailVerification } = props
    return (
        <Card className="flex-container">
            <CardContent className="card-content">
                <h1 className="title">Verify Your Email</h1>
            </CardContent>

            <CardActions className="card-actions">
                <div>
                    Please verify your email by clicking verification link.
                    Check your e-mail inbox and either SPAM folder or
                    <Button
                        onClick={sendEmailVerification}
                        className="button"
                        color="primary"
                        children="send verification link again"
                    />
                </div>
            </CardActions>
        </Card>
    )
}