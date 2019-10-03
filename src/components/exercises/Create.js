import React from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText, 
  Fab} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Form from './Form';
import { withContext } from '../../context';

function Create ({ muscles, onCreate, setOpen, open, setEditMode }) {

  const handleToggle = () => {
    setOpen(!open);
  }
  const emptyExercise = {
    title: '',
    description: '',
    muscles: ''
  };

  const handleFormSubmit = exercise => {
    handleToggle();
    onCreate(exercise);
  }

  return (
      <>
        <Fab size='small' onClick={handleToggle} color='secondary' >
          <Add />
        </Fab>      
        <Dialog 
          open={open} 
          onClose={handleToggle}
          fullWidth
          maxWidth='sm'
        >
          <DialogTitle id="form-dialog-title">
            Create new Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <Form 
              muscles={muscles} 
              onSubmit={handleFormSubmit} 
              setOpen={setOpen} 
              setEditMode={setEditMode} 
              exerciseProp={emptyExercise} 
              edit={false} />
          </DialogContent>
        </Dialog>
      </>
  );
}

//export default Create;
export default withContext(Create)