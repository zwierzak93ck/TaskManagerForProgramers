import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

export const CreateProject = (props) => {
  const {
    name,
    description,
    date,

    nameError,
    descriptionError,
    dateError,

    onProjectCreate,
    onValueChange,
  } = props;
  const currentDate = new Date();
  console.log(dateError)
  return (
    <Card className="flex-container">
      <CardContent className="card-content">
        <h1 className="title">New Project</h1>

        <TextField
          className="text-field"
          placeholder="Project Name"
          value={name}
          onChange={onValueChange}
          name="name"
        />
        <div className="error">{nameError}</div>

        <TextField
          className="text-field"
          multiline={true}
          placeholder="Project description"
          value={description}
          onChange={onValueChange}
          name="description"
        />
        <div className="error">{descriptionError}</div>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            className="date-picker"
            value={date}
            format={'dd.MM.yyyy'}
            onChange={onValueChange}
            minDate={currentDate}
            ampm="false"
            disableFuture={false}
            clearable
          />
        </MuiPickersUtilsProvider>
        <div className="error">{dateError}</div>
      </CardContent>

      <CardActions className="card-actions">
        <Button
          onClick={onProjectCreate}
          className="button"
          color="primary"
          variant="contained"
          size="large"
          children="Add Project"
        />
      </CardActions>
    </Card>
  )
}