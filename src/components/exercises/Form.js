import React, { useState, useEffect } from 'react';
import { 
  TextField,
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,} from '@material-ui/core';

export default function Form ({ 
  muscles, 
  onSubmit, 
  exerciseProp,
  setOpen,
  setEditMode,
  edit
 })
  {
  const emptyExercise = {
    title: '',
    description: '',
    muscles: ''
  };

  /*
  const getExerciseInitState = () => {
    console.log('getExerciseInitState', exerciseProp);
    return (exerciseProp ? exerciseProp : emptyExercise);
  }
*/

  //const [exerciseForm, setExerciseForm] = useState(getExerciseInitState);
  const [exercise, setExercise] = useState(exerciseProp ? exerciseProp : emptyExercise);
  
  useEffect(() => {
    console.log('useEffect');
    setExercise(exerciseProp);
  }, [exerciseProp]);

  const handleChange = name => event => {
    setExercise({ ...exercise, [name]: event.target.value });
    console.log('handlechange', exercise);
  }

  const handleSubmit = () => {
    // validate !
    onSubmit({id: exercise.title.toLocaleLowerCase().replace(/ /g, '-'),
    ...exercise});
    setExercise(emptyExercise);
    setOpen(false);
    setEditMode(false);
  }

  const {title, description} = exercise;
  const {muscles: categories} = { muscles}

  return (
    
    <form>
      <TextField
        label="Title"
        value={title}
        onChange={handleChange('title')}
        margin='normal'
        fullWidth
      >
      </TextField>
      <br />
      <FormControl
        fullWidth
      >
        <InputLabel htmlFor="muscles">
          Muscles
        </InputLabel>
        <Select
          value={exercise.muscles}
          onChange={handleChange('muscles')}
        >
          {categories.map(category => 
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          )}
        </Select>
      </FormControl>
      <TextField
        multiline
        rows="4"
        label="Description"
        value={description}
        onChange={handleChange('description')}
        margin='normal'
        fullWidth
      >
      </TextField>
      <br />
      <Button 
      color="primary" 
      variant='contained'
      onClick={handleSubmit}
      disabled={!title || !exercise.muscles}
       >
         {edit ? 'Edit' : 'Create'}
      </Button>
     </form>
  );
}