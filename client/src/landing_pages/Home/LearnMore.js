import React from 'react';
import Container from '@material-ui/core/Container';
import Content from './Content';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

const LearnMore = () => {
  return (
    <>
      <Header logo />
      <Container>
        <Content />
      </Container>
      <Footer />
    </>
  );
};

export default LearnMore;
