import React from 'react';
import Container from '@material-ui/core/Container';

import Header from 'shared/Header';
import Content from './Content';
import ContactForm from './ContactForm';

const Promotion = () => {
  return (
    <Container style={{margin: '20px auto'}}>
      <Header />
      <Content />
      <ContactForm />
    </Container>
  );
};

export default Promotion;
