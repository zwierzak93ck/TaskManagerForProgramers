import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Hidden } from '@material-ui/core';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

export const Navbar = (props) => {
    console.log(props)
    return (
            <AppBar
            className="toolbar"
            >
                <Toolbar
                >
                    <Hidden mdUp lgUp xlUp>
                        <Button className="button navbar-button" onClick={props.handleToggle}>menu</Button>
                    </Hidden>
                    <Link to="/signIn"><Button className="button navbar-button">Sign In</Button></Link>
                    <Link to="/signUp"><Button className="button navbar-button">Sign Up</Button></Link>
                    <Button className="button navbar-button" onClick={props.signOut}>Sign Out</Button>
                    <p>{props.isLoggedIn ? null : 'true'}</p>
                </Toolbar>
            </AppBar>
    )
}