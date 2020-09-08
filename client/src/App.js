import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {ThemeProvider} from '@material-ui/core';
import theme from './theme';

import Form from './landing_pages/Form/Promotion';
import ThankYou from './landing_pages/ThankYou/ThankYou';
import Home from './landing_pages/Home/LearnMore';
import Staff from './landing_pages/Staff/Staff';

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
          <Route path="/staff" component={Staff} />
          <Route path="/form" component={Form} />
          <Route path="/thankyou" component={ThankYou} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
