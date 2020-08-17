import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Facebook from 'mdi-material-ui/Facebook';
import Instagram from 'mdi-material-ui/Instagram';

import comingSoon from 'assets/coming-soon.png';
import alpine1 from 'assets/alpine-1.png';
import alpine2 from 'assets/alpine-2.png';
import riverton1 from 'assets/riverton-1.png';
import riverton2 from 'assets/riverton-2.png';

import useStyles from './Content.styles';

export const Content = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='md' className={classes.container} align='center'>
      <Grid container direction='column' justify='space-between' align='center'>
        <Grid container item direction='row'>
          <Grid item xs={3}>
            {' '}
          </Grid>
          <Grid item xs={3}>
            <Typography variant='title' className={classes.location}>
              Riverton
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='title' className={classes.location}>
              Draper
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='title' className={classes.location}>
              Alpine
            </Typography>
          </Grid>
        </Grid>

        <Grid container item direction='row'>
          <Grid item xs={3}>
            <Box className={classes.socialBox}>
              <Facebook className={classes.social} />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              target='_blank'
              href='https://www.facebook.com/premiermartialartsriverton/'
            >
              <img
                src={riverton1}
                className={classes.img}
                alt='Riverton Facebook'
              />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <IconButton
                className={classes.iconButton}
                target='_blank'
                href='#'
              >
                <img src={alpine1} className={classes.img} alt='alpine1' />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <IconButton
                className={classes.iconButton}
                target='_blank'
                href='#'
              >
                <img
                  src={comingSoon}
                  className={classes.img}
                  alt='Facebook Coming Soon'
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Grid container item direction='row'>
          <Grid item xs={3}>
            <Box className={classes.socialBox}>
              <Instagram className={classes.social} />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <IconButton
                className={classes.iconButton}
                target='_blank'
                href='https://www.instagram.com/premiermartialartsriverton/'
              >
                <img
                  src={riverton2}
                  className={classes.img}
                  alt='Riverton Instagram'
                />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <IconButton
                className={classes.iconButton}
                target='_blank'
                href='#'
              >
                <img
                  src={alpine2}
                  className={classes.img}
                  alt='Alpine Instagram'
                />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <IconButton
                className={classes.iconButton}
                target='_blank'
                href='#'
              >
                <img
                  src={comingSoon}
                  className={classes.img}
                  alt='Coming Soon Instagram'
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Content;
