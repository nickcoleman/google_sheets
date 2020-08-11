import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import useStyles from './Footer.styles';

const Footer = ({logo}) => {
  const classes = useStyles();
  return (
    <Container align='center' className={classes.container}>
      <Card className={classes.card} elevation={0}>
        <CardMedia title='Refined Harmony' alt='Refined Harmony'>
          <img src={logo} className={classes.media} />
        </CardMedia>
      </Card>
      <Typography className={classes.content}>
        DOING BUSINESS AS PREMIER MARTIAL ARTS UTAH
      </Typography>
    </Container>
  );
};

Footer.propTypes = {
  logo: PropTypes.string,
};

export default Footer;
