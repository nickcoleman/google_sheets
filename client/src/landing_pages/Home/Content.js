import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Facebook from 'mdi-material-ui/Facebook';
import Instagram from 'mdi-material-ui/Instagram';

import riv1 from '../../assets/punch.png';
import riv2 from '../../assets/team.png';
import drap1 from '../../assets/cs_gi.png';
import drap2 from '../../assets/cs_blk_shirts.png';


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
            <a
              target="_blank"
              href="https://www.facebook.com/premiermartialartsriverton/"
            >
              <img
                src={riv1}
                className={classes.img}
                alt="Riverton Facebook"
              />
            </a>
          </Grid>
          <Grid item xs={5}>
            <Box>
              <a
                className={classes.iconButton}
                target="_blank"
                href="#"
              >
                <img src={drap1} className={classes.img} alt="draper coming soon" />
              </a>
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
              <a
                className={classes.iconButton}
                target="_blank"
                href="https://www.instagram.com/premiermartialartsriverton/"
              >
                <img
                  src={riv2}
                  className={classes.img}
                  alt="Riverton Instagram"
                />
              </a>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box>
              <a
                className={classes.iconButton}
                target="_blank"
                href="#"
              >
                <img
                  src={drap2}
                  className={classes.img}
                  alt="Draper Instagram"
                />
              </a>
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
