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
  var style = {
    top: '80px',
  };
  return (
    <AppBar className="toolbar">
      <Toolbar>
        <Hidden mdUp lgUp xlUp>
          <Button className="button navbar-button" onClick={props.handleToggle}>Menu</Button>
        </Hidden>

        {
          props.auth.isEmpty ?
          <Link to="/signIn">
            <Button className="button navbar-button">Sign In</Button>
          </Link> :
          <div>
            <Button onClick={props.openMenu}>
              {props.nickName}
            </Button>
            <Menu
              style={style}
              id="simple-menu"
              anchorEl={props.anchorEl}
              open={Boolean(props.anchorEl)}
              onClose={props.handleClose}
            >
              <MenuItem onClick={props.signOut}>Sign Out</MenuItem>
            </Menu>
          </div>
        }
      </Toolbar>
    </AppBar>
  )
}