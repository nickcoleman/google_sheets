import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {ThemeProvider} from '@material-ui/core';
import theme from './theme';

import Form from './landing_pages/Promotion/Promotion';
import ThankYou from './landing_pages/ThankYou/ThankYou';
import PMA from './landing_pages/LearnMore/LearnMore';

import privacyPDF from './assets/react.pdf'
import termsPDF from './assets/react.pdf'

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            path="/privacy"
            render={() => <iframe title="privacy policy" style={{height: '100vh', width: '100vw'}} src={privacyPDF}></iframe>}
          />
          <Route
            path="/terms"
            render={() => <iframe title="terms of service" style={{height: '100vh', width: '100vw'}} src={termsPDF}></iframe>}
          />
          <Route path="/terms" component={Form} />
          <Route path="/form" component={Form} />
          <Route path="/home" component={PMA} />
          <Route path="/thankyou" component={ThankYou} />
          <Route path="/" component={PMA} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
