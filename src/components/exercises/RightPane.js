import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'; 
import Form from '../exercises/Form';

export default function RightPane({ 
  styles, 
  exercise,
  editMode,
  muscles,
  onSubmit,
  setOpen,
  setEditMode
}) {
 
  return (
    <Grid item className={styles.item} xs={12} sm={6}>
        <Paper className={styles.paper}>
          <Typography
            variant='h4'
            gutterBottom
            color='secondary'
          >
            {exercise.title}
          </Typography>
          {editMode ?
          <Form
            key={exercise.id}
            exerciseProp={exercise}
            muscles={muscles}
            onSubmit={onSubmit}
            setOpen={setOpen}
            setEditMode={setEditMode}
            edit={true}
          />
          :
          <Typography
            variant='subtitle1'
          >
            {exercise.description}
          </Typography>
        }
        </Paper>
    </Grid>
  );
}