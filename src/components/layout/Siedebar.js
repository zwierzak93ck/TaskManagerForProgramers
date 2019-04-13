import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

export const Sidebar = (props) => {
    const { handleToggle, open } = props;
    return (
        <div>
            <Hidden xsDown smDown>
                <Drawer className="sidebar" variant="permanent">
                    <div className="navbar-divider" />
                    <Link to="/addProject">
                        <Button className="button" variant="outlined">Add Project</Button>
                    </Link>
                    <Link to="/projectList">
                        <Button className="button" variant="outlined">Project List</Button>
                    </Link>
                </Drawer>
            </Hidden>

            <Hidden mdUp lgUp xlUp>
                <Drawer
                    className="sidebar"
                    variant="temporary"
                    anchor="bottom"
                    open={open}
                    onClose={handleToggle}
                >
                    <Link to="/addProject">
                        <Button className="button" onClick={handleToggle}>Add Project</Button>
                    </Link>
                    <Link to="/projectList">
                        <Button className="button" onClick={handleToggle}>Project List</Button>
                    </Link>
                </Drawer>
            </Hidden>
        </div>
    )
}