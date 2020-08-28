import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Facebook from 'mdi-material-ui/Facebook';
import Instagram from 'mdi-material-ui/Instagram';

import alpine1 from 'assets/alpine-1.png';
import alpine2 from 'assets/alpine-2.png';
import riverton1 from 'assets/riverton-1.png';
import riverton2 from 'assets/riverton-2.png';

import logo from "assets/refined-harmony-green.png";
import cnst from "../../helpers/constants";

import useStyles from './Content.styles';

export const Content = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container} align="center">
      <Grid container direction="column" justify="space-between" align="center">
        <Grid container item direction="row">
          <Grid item xs={2}>
            {" "}
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h1" className={classes.location}>
              Riverton
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h1" className={classes.location}>
              Draper
            </Typography>
          </Grid>
        </Grid>

        <Grid container item direction="row">
          <Grid item xs={2}>
            <Box className={classes.socialBox}>
              <Facebook className={classes.social} />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <IconButton
              target="_blank"
              href="https://www.facebook.com/premiermartialartsriverton/"
            >
              <img
                src={riverton1}
                className={classes.img}
                alt="Riverton Facebook"
              />
            </IconButton>
          </Grid>
          <Grid item xs={5}>
            <Box>
              <IconButton
                className={classes.iconButton}
                target="_blank"
                href="#"
              >
                <img src={alpine1} className={classes.img} alt="alpine1" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Grid container item direction="row">
          <Grid item xs={2}>
            <Box className={classes.socialBox}>
              <Instagram className={classes.social} />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box>
              <IconButton
                className={classes.iconButton}
                target="_blank"
                href="https://www.instagram.com/premiermartialartsriverton/"
              >
                <img
                  src={riverton2}
                  className={classes.img}
                  alt="Riverton Instagram"
                />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box>
              <IconButton
                className={classes.iconButton}
                target="_blank"
                href="#"
              >
                <img
                  src={alpine2}
                  className={classes.img}
                  alt="Alpine Instagram"
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <a href="/form">
          <img
            className={classes.gif}
            alt="spinning wheel"
            src={cnst.HOME_WHEEL_GIF}
          />
        </a>

        <Typography className={classes.comingSoonTitle}>Coming Soon</Typography>
        <Typography className={classes.listOfCities}>
          {`
Riverton
Draper
South Jordan
West Jordan
Stansbury Park
Alpine
Pleasant Grove
Springville
`}
        </Typography>
        <Typography className={classes.footer}>
          Subsidiary of Refined Harmony Premier
        </Typography>
        <img
          alt="refined harmony premier logo"
          className={classes.logo}
          src={logo}
        ></img>
      </Grid>
    </Container>
  );
};

export default Content;
