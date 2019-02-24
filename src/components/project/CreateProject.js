import React from 'react';
import TextField from '@material-ui/core/TextField';

export const CreateProject = (props) => {


    return (
    <div className="create-project-container">
        <TextField value={props.title} onChange={props.onValueChange} name="title"></TextField>
        <TextField value={props.description} onChange={props.onValueChange} name="description"></TextField>
        <button onClick={props.onProjectCreate}>Test</button>
    </div>
    )
}