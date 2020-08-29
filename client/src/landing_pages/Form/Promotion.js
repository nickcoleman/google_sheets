import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../../shared/Header'
import Content from './Content';
import ContactForm from './ContactForm';
import ColorBar from 'shared/ColorBar';
import Footer from 'shared/Footer';
// import logo from 'assets/refined-harmony.png';

import useStyles from './Promotion.styles';

const Promotion = () => {
  const classes = useStyles();
  return (
    <>
      <Header/>
      <Container maxWidth='md' className={classes.container}>
        <Content />
        <ContactForm />
        <Footer/>
      </Container>
      <ColorBar />
    </>
  );
};

export default Promotion;
