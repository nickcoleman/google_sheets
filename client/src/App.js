import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {ThemeProvider} from '@material-ui/core';
import theme from './theme';

import Form from './landing_pages/Promotion/Promotion';
import ThankYou from './landing_pages/ThankYou/ThankYou';
import PMA from './landing_pages/LearnMore/LearnMore';

import termsPDF from './assets/terms.pdf'

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            path="/terms"
            render={() => <iframe title="terms and conditions" style={{height: '100vh', width: '100vw'}} src={termsPDF}></iframe>}
          />
          <Route path="/form" component={Form} />
          <Route path="/thankyou" component={ThankYou} />
          <Route path="/" component={PMA} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
