import React from 'react';

import Container from '@material-ui/core/Container';

import ColorBar from 'shared/ColorBar';
import Footer from 'shared/Footer';
import Content from './Content';
import logo from 'assets/refined-harmony.png';

const ThankYou = () => {
  return (
    <>
      <ColorBar />
      <Container maxWidth='md' direction='column'>
        <Content />
        <Footer logo={logo} />
      </Container>
      <ColorBar/>
    </>
  );
};

export default ThankYou;
