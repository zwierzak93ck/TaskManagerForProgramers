import React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import { Hidden } from '@material-ui/core';

export const Navbar = (props) => {
  const {
    auth,
    anchorEl,

    handleToggle,
    onMenuToggle,
    onSignOut
  } = props;

  var style = {
    top: '80px'
  };

  return (
    <AppBar className="toolbar">
      <Toolbar>
        <Hidden mdUp lgUp xlUp>
          <Button
            className="button navbar-button"
            onClick={handleToggle}
            children="Menu"
          />
        </Hidden>
        {
          auth.isEmpty ?
            <Link to="/signIn">
              <Button
                className="button navbar-button"
                children="Sign In"
              />
            </Link> :
            <div>
              {
                auth.displayName ?
                  <Button
                    onClick={onMenuToggle}
                    children={auth.displayName}
                  /> : null
              }
              <Menu
                style={style}
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={onMenuToggle}>

                <Link
                  className="link"
                  to="/settings">
                  <MenuItem>Settings</MenuItem>
                </Link>

                <Link
                  className="link"
                  to="/">
                  <MenuItem onClick={onSignOut}>Sign Out</MenuItem>
                </Link>

              </Menu>
            </div>
        }
      </Toolbar>
    </AppBar>
  )
}