import React from 'react';

import Container from '@material-ui/core/Container';

import Footer from 'shared/Footer';
import Content from './Content';
import Header from '../../shared/Header';
// import ColorBar from '../../shared/ColorBar'

import logo from 'assets/refined-harmony-green.png';

const ThankYou = () => {
  return (
    <>
      <div style={{ height: "50px", backgroundColor: "#20AE4B", zIndex: -1 }}></div>
      <Container>
        <Header />
        <Content />
        <Footer logo={logo} />
      </Container>
    </>
  );
};

export default ThankYou;
