import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export const Notification = (props) => {
    console.log(props.open)
    return (
        <Snackbar 
        className={'notification ' + props.variant}
        autoHideDuration={6000}
        open={props.open}
        message={props.message}
        onClose={props.handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              onClick={props.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
    )
}