import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { ProjectDetails } from '../project/ProjectDetails';
import { CreateProject } from '../project/CreateProject';
import { Sidebar } from './Siedebar';
import '../../stylesheets/rootStyles.scss';
import SidebarContainer from '../../containers/layout/SidebarContainer';
import { ProjectList } from '../project/ProjectList'
import { SignIn } from '../auth/SignIn';
import { SignUp } from '../auth/SignUp';
import SignUpContainer from '../../containers/auth/SignUpContainer';
import { Navbar } from './Navbar';
import NavbarContainer from '../../containers/layout/NavbarContainer';
import SignInContainer from '../../containers/auth/SignInContainer';
import CreateProjectContainer from '../../containers/project/CreateProjectContainer';
import ProjectDetailsContainer from '../../containers/project/ProjectDetailsContainer';
import ProjectListContainer from '../../containers/project/ProjectListContainer';
import ForgotPaswordContainer from '../../containers/account/ForgotPaswordContainer';

export const MainContent = (props) => {
    return (
        <BrowserRouter>
            <div>
                <NavbarContainer />
                <SidebarContainer />
                <div className="navbar-divider" />
                <div className="flex-main-content">
                    { (props.auth.isEmpty && !props.auth.emailVerified) ? 
                    <Redirect to="/signIn" /> :
                    <Redirect to="/projectList" /> }
                    <Route path="/projectList" component={ProjectListContainer} />
                    <Route path="/projectDetails/:id" component={ProjectDetailsContainer}/>
                    <Route path="/addProject" component={CreateProjectContainer}/>
                    <Route path="/signIn" component={SignInContainer} />
                    <Route path="/signUp" component={SignUpContainer} />
                    <Route path="/forgotPassword" component={ForgotPaswordContainer} />
                </div>
            </div>
        </BrowserRouter>
    )
}