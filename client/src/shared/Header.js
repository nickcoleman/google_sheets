import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import pmaLogo from 'assets/logo-pma.png';

import useStyles from './Header.styles';

const Header = () => {
  const classes = useStyles();
  return (
    <Box align='center' className={classes.logoBox}>
      <img alt="PMA logo" src={pmaLogo} className={classes.logo} />
    </Box>
  );
};

export default Header;
