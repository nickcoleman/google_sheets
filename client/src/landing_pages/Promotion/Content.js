import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import logo from 'assets/refined-harmony.png';

import useStyles from './Content.styles';

export const Content = () => {
  const classes = useStyles();
  return (
    <Container align="center" className={classes.container}>
      <img alt='refined harmony premier logo' className={classes.logo} src={logo}></img>
      <Typography className={classes.dba}>
        Doing Business as Premier Martial Arts Utah
      </Typography>
      <Typography className={classes.content}>
        Enter the below information to confirm or schedule your FREE martial
        arts lesson PLUS be entered into our monthly giveaway!
      </Typography>
    </Container>
  );
};

export default Content;
