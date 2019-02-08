import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const Navbar = (props) => {
    return (
            <AppBar
            className="toolbar"
            >
                <Toolbar
                >
                    <button>signin</button>
                    <button>signup</button>
                    <button>signout</button>
                </Toolbar>
            </AppBar>
    )
}