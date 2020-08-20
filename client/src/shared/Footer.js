import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import useStyles from './Footer.styles';

const Footer = ({logo}) => {
  const classes = useStyles();
  return (
    <Container align='center' className={classes.container}>
      <Typography className={classes.content}>
        <Link href='https://pmautah.com/learnmore'>
          DOING BUSINESS AS PREMIER MARTIAL ARTS UTAH
        </Link>
      </Typography>
    </Container>
  );
};

Footer.propTypes = {
  logo: PropTypes.string,
};

export default Footer;
