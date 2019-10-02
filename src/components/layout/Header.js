import React from 'react';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import CreateDialog from '../exercises/dialogs/Create';

const styles = {
  flex: {
    flex: 1
  }
}

export default withStyles(styles)(function Header ({ 
  classes,
  muscles, 
  onExerciseCreate,
  exercise,
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
        <CreateDialog muscles={muscles} onCreate={onExerciseCreate} setOpen={setOpen} open={open} setEditMode={setEditMode} />
      </Toolbar>
    </AppBar>
  );
})