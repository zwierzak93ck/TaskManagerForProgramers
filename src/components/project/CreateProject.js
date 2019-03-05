import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, CardActionArea, CardActions, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

export const CreateProject = (props) => {
    const currentDate = new Date();

    return (
    <Card className="auth-flex-container">
    <CardContent className="card-content">
            <h1 className="title">New Project</h1>
            <TextField className="text-field" placeholder="Project Name" value={props.name} onChange={props.onValueChange} name="name"></TextField>
        
            <TextField className="text-field" multiline={true} placeholder="Project description"  value={props.description} onChange={props.onValueChange} name="description"></TextField>
        
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              className="date-picker"
              value={props.date}
              format={'dd.MM.yyyy'}
              onChange={props.onDateChange}
              minDate={currentDate}
              ampm="false"
              disableFuture={false}
              emptyLabel="Date"
              keyboard
              clearable
            />
          </MuiPickersUtilsProvider>
            
    </CardContent>
        <CardActions className="card-actions">
            <Button onClick={props.onProjectCreate} className="button" color="primary" variant="contained" size="large">Add Project</Button>
        </CardActions>
</Card>
    )
}