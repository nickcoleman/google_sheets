import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Facebook from 'mdi-material-ui/Facebook';
import Instagram from 'mdi-material-ui/Instagram';
import useStyles from './Content.styles';

export const Content = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='md' className={classes.container} align='center'>
      <Grid container direction='column' alignContent='center'>
        <Grid item>
          <Typography className={classes.content}>
            We will be contacting you soon!
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.content}>
            Learn more about us on Facebook or Instagram
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction='row' justify='center' spacing={2}>
        <Grid item>
          <IconButton
            className={classes.iconButton}
            target='_blank'
            href='https://www.facebook.com/premiermartialartsbountiful/'
          >
            <Facebook />
            <Typography className={classes.location}> Bountiful</Typography>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            className={classes.iconButton}
            target='_blank'
            href='https://www.facebook.com/premiermartialartsriverton/'
          >
            <Facebook />
            <Typography className={classes.location}> Riverton</Typography>
          </IconButton>
        </Grid>
      </Grid>
      <Grid container direction='row' justify='center' spacing={2}>
        <Grid item>
          <IconButton
            className={classes.iconButton}
            target='_blank'
            href='https://www.instagram.com/premiermartialartsbountiful'
          >
            <Instagram />
            <Typography className={classes.location}> Bountiful</Typography>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            className={classes.iconButton}
            target='_blank'
            href='https://www.instagram.com/premiermartialartsriverton/'
          >
            <Instagram />
            <Typography className={classes.location}> Riverton</Typography>
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Content;
