import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectList = (props) => {
    return (
         <div>
         { props.projects ? 
            props.projects.map(project => (
                <div>{project.title}</div>
            )) : null
        } 
        </div>
    )
}