import React from 'react';
import ColorBar from '../shared/ColorBar'
import Box from '@material-ui/core/Box';
import pmaLogo from 'assets/logo-pma.png';

import useStyles from './Header.styles';

const Header = ({logo}) => {
  const classes = useStyles();
  return (
    <>
      <ColorBar/>
      {logo && 
      <Box align='center' className={classes.logoBox}>
        <img alt="PMA logo" src={pmaLogo} className={classes.logo} />
      </Box>}
    </>
  );
};

export default Header;
