import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import CreateProjectContainer from '../../containers/project/CreateProjectContainer';
import ForgotPaswordContainer from '../../containers/account/ForgotPaswordContainer';
import NavbarContainer from '../../containers/layout/NavbarContainer';
import ProjectDetailsContainer from '../../containers/project/ProjectDetailsContainer';
import ProjectListContainer from '../../containers/project/ProjectListContainer';
import SettingsContainer from '../../containers/account/SettingsContainer';
import SidebarContainer from '../../containers/layout/SidebarContainer';
import SignInContainer from '../../containers/auth/SignInContainer';
import SignUpContainer from '../../containers/auth/SignUpContainer';
import '../../stylesheets/rootStyles.scss';

export const MainContent = (props) => {
    const { auth } = props;
    return (
        <BrowserRouter>
            <div>
                <NavbarContainer />
                <SidebarContainer />
                <div className="navbar-divider" />
                <div className="flex-main-content">
                    {(
                        auth.isEmpty && !auth.emailVerified) ?
                        <Redirect to="/signIn" /> :
                        <Redirect to="/projectList" />}
                    <Route path="/projectList" component={ProjectListContainer} />
                    <Route path="/projectDetails/:id" component={ProjectDetailsContainer} />
                    <Route path="/addProject" component={CreateProjectContainer} />
                    <Route path="/signIn" component={SignInContainer} />
                    <Route path="/signUp" component={SignUpContainer} />
                    <Route path="/forgotPassword" component={ForgotPaswordContainer} />
                    <Route path="/settings" component={SettingsContainer} />
                </div>
            </div>
        </BrowserRouter>
    )
}