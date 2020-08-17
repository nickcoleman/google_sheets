import React from 'react';

import Container from '@material-ui/core/Container';

import Footer from 'shared/Footer';
import Content from './Content';
import Header from '../../shared/Header';
import ColorBar from '../../shared/ColorBar'

import logo from 'assets/refined-harmony-green.png';

const ThankYou = () => {
  return (
    <>
      <ColorBar/>
      <Container>
        <Header />
        <Content />
        <Footer logo={logo} />
      </Container>
    </>
  );
};

export default ThankYou;
