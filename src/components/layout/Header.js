import React from 'react';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import CreateDialog from '../exercises/Create';
import { compose } from 'recompose';
import { withContext } from '../../context';

const styles = {
  flex: {
    flex: 1
  }
}

function Header ({ 
  classes,
  setOpen,
  open,
  setEditMode
 }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" color='inherit' className={classes.flex}>
          Excercise Database
        </Typography>
        <CreateDialog 
          setOpen={setOpen} 
          open={open} 
          setEditMode={setEditMode} />
      </Toolbar>
    </AppBar>
  );
}

export default compose(withContext, withStyles(styles))(Header)