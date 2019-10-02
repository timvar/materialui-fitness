import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText, 
  Fab} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Form from '../Form';


export default function Create ({ muscles, onCreate, setOpen, open, setEditMode }) {

  const handleToggle = () => {
    setOpen(!open);
  }
  const emptyExercise = {
    title: '',
    description: '',
    muscles: ''
  };

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
          <Form muscles={muscles} onSubmit={onCreate} setOpen={setOpen} setEditMode={setEditMode} exerciseProp={emptyExercise} edit={false} />
        </DialogContent>
      </Dialog>
    </>
  );
}