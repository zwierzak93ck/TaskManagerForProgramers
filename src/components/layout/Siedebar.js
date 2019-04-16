import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

export const Sidebar = (props) => {
    const { handleToggle, open } = props;
    return (
        <div>
            <Hidden xsDown smDown>
                <Drawer className="sidebar" variant="permanent">
                    <div className="navbar-divider" />
                    <Link to="/addProject">
                        <Button
                            className="button"
                            variant="outlined"
                            children="Add Project"
                        />
                    </Link>
                    <Link to="/projectList">
                        <Button
                            className="button"
                            variant="outlined"
                            children="Project List"
                        />
                    </Link>
                </Drawer>
            </Hidden>

            <Hidden mdUp lgUp xlUp>
                <Drawer
                    className="sidebar"
                    variant="temporary"
                    anchor="bottom"
                    open={open}
                    onClose={handleToggle}>

                    <Link to="/addProject">
                        <Button
                            className="button"
                            onClick={handleToggle}
                            children="Add Project"
                        />
                    </Link>

                    <Link to="/projectList">
                        <Button
                            className="button"
                            onClick={handleToggle}
                            children="Project list"
                        />
                    </Link>
                    
                </Drawer>
            </Hidden>
        </div>
    )
}