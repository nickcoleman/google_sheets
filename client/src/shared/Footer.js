import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import useStyles from './Footer.styles';

const Footer = ({logo}) => {
  const classes = useStyles();
  return (
    <Container align='center' className={classes.container}>
      <Box className={classes.imageBox}>
        <img alt="PMA logo" src={logo} className={classes.media} />
      </Box>
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
