import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

import ColorBar from 'shared/ColorBar';
import pmaLogo from 'assets/logo-pma.png';

const Header = () => {
  return (
    <Container>
      <div style={{zIndex: 0, backgroundColor: 'green', height: 50}} />
      <Box align='center' style={{zIndex: 10, marginTop: -50}}>
        <img src={pmaLogo} style={{height: 'auto', width: 300}} />
      </Box>
    </Container>
  );
};

export default Header;
