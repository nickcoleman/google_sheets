import React from 'react';

import Container from '@material-ui/core/Container';

import Header from 'shared/Header';
import Footer from 'shared/Footer';
import Content from './Content';

const ThankYou = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md" direction="column">
        <Content />
      </Container>
      <Footer />
    </>
  );
};

export default ThankYou;
