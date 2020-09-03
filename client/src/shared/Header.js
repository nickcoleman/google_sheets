import React from 'react';
import Navigation from '../shared/Navigation'
import Box from '@material-ui/core/Box';
import pmaLogo from 'assets/logo-pma.png';

import useStyles from './Header.styles';

const Header = ({logo}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bar}>
        <Navigation/>
      </div>
      {logo && 
      <Box align='center' className={classes.logoBox}>
        <img alt="PMA logo" src={pmaLogo} className={classes.logo} />
      </Box>}
    </>
  );
};

export default Header;
