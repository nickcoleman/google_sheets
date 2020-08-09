import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import logo from 'assets/logo-main-300x195.png';
import useStyles from './Header.styles';

export const Header = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={logo}
        title='Premier Martial Arts'
        alt='Premier Martial Arts'
      />
      <CardHeader
        className={classes.cardHeader}
        title='Empowering lives through Martial Arts'
      />
    </Card>
  );
};

export default Header;
