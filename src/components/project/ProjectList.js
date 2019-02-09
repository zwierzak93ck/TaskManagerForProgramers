import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectList = () => {
    return (
        <div>
        <Link to="/projectDetails/1">Project Details</Link>
        <Link to="/projectDetails/2">Project Details</Link>
        <Link to="/projectDetails/3">Project Details</Link>
        <Link to="/projectDetails/4">Project Details</Link>
        <Link to="/projectDetails/5">Project Details</Link>
        </div>
    )
}