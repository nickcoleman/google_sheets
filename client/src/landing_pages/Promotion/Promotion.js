import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';

import Content from './Content';
import ContactForm from './ContactForm';
import ColorBar from 'shared/ColorBar';
import Footer from 'shared/Footer';
import logo from 'assets/refined-harmony.png';

import useStyles from './Promotion.styles';

const Promotion = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='md' className={classes.container}>
      <ColorBar />
      <Content />
      <ContactForm />
      <Footer logo={logo} />
      <ColorBar />
    </Container>
  );
};

export default Promotion;
