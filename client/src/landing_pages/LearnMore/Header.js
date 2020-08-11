import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import pmaLogo from 'assets/logo-pma.png';

import useStyles from './Header.styles';

const Header = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.colorBar} />
      <Box align='center' className={classes.colorBar}>
        <img src={pmaLogo} className={classes.logo} />
      </Box>
    </Container>
  );
};

export default Header;
