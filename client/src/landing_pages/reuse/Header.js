import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import logo from '../../assets/logo-main-300x195.png';

export const Header = () => {
  return (
    <Container>
      <Grid container spacing={4} direction='column' alignItems='center'>
        <Grid item xs={12} maxWidth='sm' spacing={2}>
          <div>
            <img
              src={logo}
              title='Premier Martial Arts'
              style={{maxWidth: 200}}
              alt='Premier Martial Arts'
            />
          </div>
        </Grid>
        <Grid item xs={12} maxWidth='sm' align='center' spacing={2}>
          <Typography variant='h3'>
            Empowering lives through Martial Arts
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
