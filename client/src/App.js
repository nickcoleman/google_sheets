import React from 'react';
import {Promotion} from './landing_pages/Promotion'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Promotion />
    </ThemeProvider>
  );
}

export default App;
