import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import logo from 'assets/logo-refined-harmony.png';

import useStyles from './Content.styles';

export const Content = () => {
  const classes = useStyles();
  return (
    <Container align="center" className={classes.container}>
      <Card className={classes.card} elevation={0}>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Martial Arts"
          alt="Martial Arts"
        />
      </Card>
      <Typography className={classes.content}>
        Enter the below information to confirm or schedule your FREE martial
        arts lesson PLUS be entered into our monthly giveaway!
      </Typography>
    </Container>
  );
};

export default Content;
