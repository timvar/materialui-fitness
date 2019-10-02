import React, { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Header, Footer } from './components/layout';
import Exercises from './components/exercises';
import { muscles, exerciseList} from './store/store';


import './App.css';


function groupBy(objectArray, property) {

  const initExercises = muscles.reduce((exercises, category) => ({
    ...exercises,
    [category]: []
  }), {})

  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, initExercises);
}

export default function App() {

  const defaultExcercise = {
    id: '',
    title: 'Yo!',
    description: 'Choose exercise!'
  };

  const [exercises, setExercises]  = useState(exerciseList);
  const [exercise, setExercise]  = useState(defaultExcercise);
  const [category, setCategory]  = useState('');
  const [editMode, setEditMode] = useState(false);
  const [open, setOpen]  = useState(false);

  const test = Object.entries(groupBy(exercises, 'muscles'));

  const handleCategorySelect = category => {
    setCategory(category);
  }
  const handleExerciseSelect = id => {
    const newExercise = exercises.find(ex => ex.id === id);
    setExercise(newExercise);
    setEditMode(false);
  }

  const handleExerciseCreate = exercise => {
    setExercises([...exercises, exercise]);
  }

  const handleExerciseDelete = id => {
    const newExercises = exercises.filter(item => item.id !== id);
    setExercises(newExercises);
    setEditMode(exercise.id === id ? false : editMode);
    setExercise(exercise.id === id ? {} : exercise);
  }

  const handleExerciseSelectEdit = id => {
    setEditMode(false);
    console.log('handleExerciseSelectEdit id', id);
    const newExercise = exercises.find(ex => ex.id === id);
    setExercise(newExercise);
    console.log('exercise', exercise);
    setEditMode(true);
  }

  const handleExerciseEdit = exercise => {
    const newExercises = [...exercises.filter(item => item.id !== exercise.id), exercise];
    setExercises(newExercises);
  }
  
  return (
    <>
      <CssBaseline />
      <Header 
        muscles={muscles}
        onExerciseCreate={handleExerciseCreate}
        exercise={exercise}
        setOpen={setOpen}
        open={open}
        setEditMode={setEditMode}
      />
      <Exercises
        exercise={exercise} 
        exercises={test} 
        category={category}
        onSelect={handleExerciseSelect}
        onDelete={handleExerciseDelete}
        editMode={editMode}
        muscles={muscles}
        onEdit={handleExerciseEdit}
        onSelectEdit={handleExerciseSelectEdit}
        setOpen={setOpen}
        setEditMode={setEditMode}
      />
      <Footer 
        muscles={muscles}
        onSelect={handleCategorySelect}
        category={category}
      />
    </>
  );
}