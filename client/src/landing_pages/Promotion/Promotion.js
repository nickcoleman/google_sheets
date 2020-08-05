import React from 'react';
import Container from '@material-ui/core/Container';

import {Header, ContactForm} from 'landing_pages/reuse';
import Card from 'landing_pages/Promotion/Card';

const Promotion = () => {
  const ownProps = {
    campaign: 'Example Promotion',
  };
  return (
    <Container>
      <Header />
      <Card />
      <ContactForm {...ownProps} />
    </Container>
  );
};

export default Promotion;
