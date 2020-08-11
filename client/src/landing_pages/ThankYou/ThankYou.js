import React from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import ColorBar from 'shared/ColorBar';
import Footer from 'shared/Footer';
import Content from './Content';
import logo from 'assets/refined-harmony.png';

const ThankYou = () => {
  return (
    <Container maxWidth='md' direction='column'>
      <ColorBar />
      <Content />
      <Footer logo={logo} />
    </Container>
  );
};

export default ThankYou;
