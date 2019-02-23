import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

export const CreateProject = () => {
    const [val, setVal] = useState('aaa')


    return (
    <div className="create-project-container">
        <TextField onChange={(e) => setVal(e.target.value)} value={val}></TextField>
        <TextField></TextField>
        <button>Test</button>
    </div>
    )
}