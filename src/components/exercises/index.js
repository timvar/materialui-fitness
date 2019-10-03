import React  from 'react';
import { Grid, withStyles } from '@material-ui/core'; 
import RightPane from './RightPane';
import LeftPane from './LeftPane';
import { compose } from 'recompose';
import { withContext } from '../../context';

const styles = theme => ({
  paper: {
    padding: 20,
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 10px)',
      marginTop: 5  
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56px - 48px)'
    }
  },
  item: {
      [theme.breakpoints.down('xs')]: {
        height: '50%'
      }
  }
})

function Exercises ({ 
  classes,
  exercisesByMuscles, 
  category, 
  onSelect, 
  exercise, 
  exercise: {
    id = 'welcome',
    title = 'Yo!',
    description = 'Choose whatever you like...'
  },
  onDelete,
  editMode,
  muscles,
  onEdit,
  onSelectEdit,
  setOpen,
  setEditMode
}) {
  return (
    <Grid item container className={classes.container} >
      <LeftPane 
        exercises={exercisesByMuscles}
        styles={classes} 
        category={category} 
        onSelect={onSelect} 
        onDelete={onDelete}
        onSelectEdit={onSelectEdit}
      />
      <RightPane 
        styles={classes} 
        exercise={exercise}
        editMode={editMode}
        muscles={muscles}
        onSubmit={onEdit}
        setOpen={setOpen}
        setEditMode={setEditMode}
      />
    </Grid>
  );
}

export default compose(withContext, withStyles(styles))(Exercises)