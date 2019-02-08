import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

export const Sidebar = () => {
    return (
    <Drawer
    className="sidebar"
    variant="permanent"
    >
        <div className="navbar-divider" />
    <Link to="/addProject">Add Project</Link>
    <Link to="/addProject">Add Project</Link>
    <Link to="/addProject">Add Project</Link>
    <Link to="/addProject">Add Project</Link>
    <Link to="/addProject">Add Project</Link>
    <Link to="/addProject">Add Project</Link>
    <Link to="/addProject">Add Project</Link>
    <Link to="/addProject">Add Project</Link>
    <Link to="/addProject">Add Project</Link>
    <Link to="/addProject">Add Project</Link>
    <Link to="/addProject">Add Project</Link>

    </Drawer>
    )
}