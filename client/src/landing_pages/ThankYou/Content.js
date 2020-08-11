import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Facebook from 'mdi-material-ui/Facebook';
import Instagram from 'mdi-material-ui/Instagram';
import useStyles from './Content.styles';

export const Content = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='md' className={classes.container} align='center'>
      <Typography className={classes.title}>
        WE WILL BE CONTACTING YOU SOON TO SCHEDULE YOUR <u>FREE</u> APPOINTMENT
      </Typography>

      <Link href='/learnmore' className={classes.link}>
        LEARN MORE ABOUT US ON FACEBOOK OR INSTAGRAM
      </Link>
    </Container>
  );
};

export default Content;
