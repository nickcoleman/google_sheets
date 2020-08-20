import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Content from './Content';
import Header from '../../shared/Header';


import logo from 'assets/refined-harmony-green.png';
import useStyles from "./Content.styles";


const LearnMore = () => {
    const classes = useStyles();
  return (
    <>
      <div className={classes.header}></div>
      <Container>
        <Header />
        <Content />
        <Typography className={classes.footer}>
          Subsidiary of Refined Harmony Premier
        </Typography>
        <img alt='refinedharmony premier logo' className={classes.logo} src={logo}></img>
      </Container>
      <div className={classes.header}></div>
    </>
  );
};

export default LearnMore;
