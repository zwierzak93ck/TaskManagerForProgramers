import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { ProjectDetails } from '../project/ProjectDetails';
import { CreateProject } from '../project/CreateProject';
import { Sidebar } from './Siedebar';
import '../../stylesheets/rootStyles.scss';
import SidebarContainer from '../../containers/layout/SidebarContainer';
import { ProjectList } from '../project/ProjectList'
import { SignIn } from '../auth/SignIn';
import { SignUp } from '../auth/SignUp';
import  { Navbar }  from './Navbar';
import NavbarContainer from '../../containers/layout/NavbarContainer';

export const MainContent = () => {
    return (
        
        <BrowserRouter>
        <div className="main-content">
        <NavbarContainer />
        <SidebarContainer />
        <div className="navbar-divider"/>
        <Route path="/projectList" render={(props) => <ProjectList {...props} /> } />
<Route path="/projectDetails/:id" render={(props) => <ProjectDetails {...props} />}/>
<Route path="/addProject" render={(props) => <CreateProject {...props} />}/>
<Route path="/signIn" render={(props) => <SignIn {...props} />}/>
<Route path="/signUp" render={(props) => <SignUp {...props} />}/>
</div>
</BrowserRouter>
    )
}