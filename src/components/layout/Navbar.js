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
  const { auth, nickName, openMenu, handleToggle, signOut, anchorEl, closeMenu } = props;
  console.log(auth)
  var style = {
    top: '80px',
  };
  return (
    <AppBar className="toolbar">
      <Toolbar>
        <Hidden mdUp lgUp xlUp>
          <Button className="button navbar-button" onClick={handleToggle}>Menu</Button>
        </Hidden>

        {
          auth.isEmpty ?
            <Link to="/signIn">
              <Button className="button navbar-button">Sign In</Button>
            </Link> :
            <div>
              {
                auth.displayName ?
                  <Button onClick={openMenu}>
                    {auth.displayName}
                  </Button> : null
              }
              <Menu
                style={style}
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeMenu}>
                <Link className="link" to="/settings">
                  <MenuItem>Settings</MenuItem>
                </Link>
                <Link className="link" to="/">
                  <MenuItem onClick={signOut}>Sign Out</MenuItem>
                </Link>
              </Menu>
            </div>
        }
      </Toolbar>
    </AppBar>
  )
}