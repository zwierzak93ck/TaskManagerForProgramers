import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { ProjectDetails } from '../project/ProjectDetails';
import { CreateProject } from '../project/CreateProject';
import { Sidebar } from './Siedebar';
import '../../stylesheets/rootStyles.scss';

export const MainContent = () => {
    return (
        
        <BrowserRouter>
        <div className="main-content">
        
        <Sidebar />
        <div className="navbar-divider"/>
<Route path="/projectDetails" render={(props) => <ProjectDetails {...props} projectName="TaskManager" />}/>
<Route path="/addProject" render={(props) => <CreateProject {...props} />}/>
</div>
</BrowserRouter>
    )
}