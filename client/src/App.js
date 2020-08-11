import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {ThemeProvider} from '@material-ui/core';
import theme from './theme';

import Promotion from './landing_pages/Promotion/Promotion';
import ThankYou from './landing_pages/ThankYou/ThankYou';
import LearnMore from './landing_pages/LearnMore/LearnMore';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/learnmore' component={LearnMore} />
          <Route path='/promotion' component={Promotion} />
          <Route path='/thankyou' component={ThankYou} />
          <Route path='/' component={Promotion} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
