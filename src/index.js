import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { red, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber[500]
    },
    type: 'dark'
  }
});

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
