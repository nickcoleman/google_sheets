import React from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Footer from 'shared/Footer';
import Content from './Content';
import Header from './Header';

import logo from 'assets/refined-harmony-green.png';

const ThankYou = () => {
  return (
    <Container>
      <Header />
      <Content />
      <Footer logo={logo} />
    </Container>
  );
};

export default ThankYou;
